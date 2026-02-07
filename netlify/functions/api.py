
import os
import json
import psycopg2
from datetime import datetime

# Neon PostgreSQL URL
DB_URL = "postgresql://neondb_owner:npg_6ADNTMSefF2y@ep-broad-dawn-ajhpphzj-pooler.c-3.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require"

def handler(event, context):
    # CORS sozlamalari
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    }

    if event['httpMethod'] == 'OPTIONS':
        return {"statusCode": 200, "headers": headers}

    conn = None
    try:
        conn = psycopg2.connect(DB_URL)
        cur = conn.cursor()

        # Jadval mavjud bo'lmasa yaratish
        cur.execute("""
            CREATE TABLE IF NOT EXISTS click_events (
                id SERIAL PRIMARY KEY,
                event_type VARCHAR(50),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        """)

        if event['httpMethod'] == 'POST':
            # Yangi klikni saqlash
            cur.execute(
                "INSERT INTO click_events (event_type) VALUES (%s)",
                ('cta_click',)
            )
            conn.commit()
            return {
                "statusCode": 201,
                "headers": headers,
                "body": json.dumps({"status": "success", "message": "SQL-ga saqlandi"})
            }

        elif event['httpMethod'] == 'GET':
            # Statistika olish
            cur.execute("SELECT COUNT(*) FROM click_events")
            total = cur.fetchone()[0]
            
            cur.execute("SELECT MAX(created_at) FROM click_events")
            last_click = cur.fetchone()[0]
            
            return {
                "statusCode": 200,
                "headers": headers,
                "body": json.dumps({
                    "total_clicks": total,
                    "last_click": last_click.isoformat() if last_click else None,
                    "today_clicks": total # Soddalashtirilgan holatda
                })
            }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
        }
    finally:
        if conn:
            cur.close()
            conn.close()

    return {"statusCode": 405, "headers": headers}
