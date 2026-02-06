
# CEFR Masterclass Landing Page - Deploy Qo'llanmasi

Ushbu loyiha Instagram reklamalari uchun maxsus optimallashtirilgan. Uni 2 daqiqa ichida deploy qilishingiz mumkin.

## 1-variant: Vercel orqali (Tavsiya etiladi)
1. Fayllarni GitHub-ga yuklang.
2. [Vercel.com](https://vercel.com) saytiga kiring.
3. GitHub repozitoriyangizni ulang.
4. "Deploy" tugmasini bosing.
   - **Muhim:** Loyiha build step talab qilmaydi, u to'g'ridan-to'g'ri `index.html` orqali ishlaydi.

## 2-variant: Netlify orqali
1. [Netlify.com](https://netlify.com) saytiga kiring.
2. "Drop" maydoniga loyiha papkasini tashlang.
3. Sayt tayyor!

## Target uchun eslatma:
- `index.html` faylidagi `YOUR_PIXEL_ID` o'rniga o'zingizning Facebook Pixel ID-ingizni qo'ying.
- `constants.ts` faylidagi `TELEGRAM_CHANNEL_URL` to'g'riligini tekshiring.

## Nega bu sayt "qotmaydi"?
- Sayt **Native ESM** texnologiyasida qurilgan.
- React va Tailwind kutubxonalari global CDN (esm.sh) dan yuklanadi.
- Hech qanday og'ir JavaScript framework build-lari yo'q.
