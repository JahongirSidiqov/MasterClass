
import { neon } from '@netlify/neon';

export const handler = async (event: any) => {
  // Database URL ni environment-dan oladi yoki fallback ishlatadi
  const sql = neon(process.env.NETLIFY_DATABASE_URL || "postgresql://neondb_owner:npg_6ADNTMSefF2y@ep-broad-dawn-ajhpphzj-pooler.c-3.us-east-2.aws.neon.tech/neondb");

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers };
  }

  try {
    // Jadvalni tekshirish/yaratish
    await sql`
      CREATE TABLE IF NOT EXISTS click_events (
        id SERIAL PRIMARY KEY,
        event_type TEXT DEFAULT 'cta_click',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    if (event.httpMethod === 'POST') {
      await sql`INSERT INTO click_events (event_type) VALUES ('cta_click')`;
      return { 
        statusCode: 201, 
        headers, 
        body: JSON.stringify({ status: "success", message: "Vaqt bazaga yozildi" }) 
      };
    }

    if (event.httpMethod === 'GET') {
      const totalResult = await sql`SELECT COUNT(*) as count FROM click_events`;
      const recentClicks = await sql`SELECT created_at FROM click_events ORDER BY created_at DESC LIMIT 10`;
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          total_clicks: totalResult[0].count,
          last_clicks: recentClicks.map(r => r.created_at)
        })
      };
    }

    return { statusCode: 405, headers, body: "Method Not Allowed" };
  } catch (error: any) {
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};
