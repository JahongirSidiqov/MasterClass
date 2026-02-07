
import { API_BASE_URL } from '../constants';

export const trackCTAClick = async () => {
  // 1. Meta Pixel (Frontend event)
  const win = window as any;
  if (win.fbq) {
    win.fbq('track', 'Lead', { content_name: 'Telegram Join' });
  }

  // 2. Local Storage (Backup uchun)
  const currentCount = parseInt(localStorage.getItem('cta_clicks') || '0');
  localStorage.setItem('cta_clicks', (currentCount + 1).toString());

  // 3. Django Backend API-ga yuborish
  try {
    const response = await fetch(`${API_BASE_URL}/api/track-click/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: 'cta_click',
        platform: 'web_landing'
      })
    });
    
    if (!response.ok) throw new Error('Backend error');
    console.log("Django: Klik bazaga saqlandi.");
  } catch (error) {
    console.error("Django-ga ulanishda xatolik:", error);
  }
};

export const getStatsFromBackend = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stats/`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Statistika olishda xatolik:", error);
    return null;
  }
};
