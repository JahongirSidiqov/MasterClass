
export const trackCTAClick = () => {
  // 1. Log to Meta Pixel
  // Casting window to any to access the fbq function provided at runtime by Meta Pixel
  const win = window as any;
  if (win.fbq) {
    win.fbq('track', 'Lead', { content_name: 'Telegram Join' });
  }

  // 2. Local Storage Persistence (to see stats on the device)
  const currentCount = parseInt(localStorage.getItem('cta_clicks') || '0');
  localStorage.setItem('cta_clicks', (currentCount + 1).toString());
  localStorage.setItem('last_click_time', new Date().toISOString());

  // 3. Real-world tip: In a production app, you would fetch a webhook here:
  // fetch('https://your-webhook-url.com/track', { method: 'POST', body: JSON.stringify({ event: 'click' }) });
  
  console.log("Click tracked. Total session clicks:", currentCount + 1);
};

export const getStats = () => {
  return {
    totalClicks: parseInt(localStorage.getItem('cta_clicks') || '0'),
    lastClick: localStorage.getItem('last_click_time')
  };
};
