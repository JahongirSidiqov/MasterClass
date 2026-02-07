
import { API_BASE_URL } from '../constants';

export const trackCTAClick = async () => {
  // Meta Pixel
  const win = window as any;
  if (win.fbq) win.fbq('track', 'Lead');

  // SQL Backend (Netlify Function)
  try {
    await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error("Tracking error:", e);
  }
};

export const getStatsFromBackend = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    return response.ok ? await response.json() : null;
  } catch (e) {
    return null;
  }
};
