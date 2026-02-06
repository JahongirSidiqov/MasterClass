
# CEFR Masterclass Landing Page - Deploy Qo'llanmasi

Ushbu loyiha Instagram reklamalari uchun maxsus optimallashtirilgan. Uni 2 daqiqa ichida deploy qilishingiz mumkin.

## Vercel orqali deploy qilish (Qadamba-qadam):

1. Fayllarni GitHub-ga yuklang.
2. [Vercel.com](https://vercel.com) saytida **"Add New Project"** tugmasini bosing.
3. GitHub repozitoriyangizni tanlang.
4. **Project Settings** bo'limida quyidagilarni belgilang:
   - **Framework Preset:** `Other` (Boshqa)
   - **Root Directory:** `./`
   - **Build Command:** Bo'sh qoldiring (yoki default turaversin)
   - **Output Directory:** Bo'sh qoldiring (Loyiha ildiz papkasidan ishlaydi)
5. **"Deploy"** tugmasini bosing.

## Nega "Other" tanlanadi?
Bu loyiha **Native ESM** texnologiyasida yozilgan. Bu degani, brauzerning o'zi kodni tushunadi va bizga og'ir `npm build` jarayonlari shart emas. Bu esa saytning "qotmasdan" va juda tez yuklanishini ta'minlaydi.

## Target uchun eslatma:
- `index.html` faylidagi `YOUR_PIXEL_ID` o'rniga o'zingizning Facebook Pixel ID-ingizni qo'ying.
- `constants.ts` faylidagi `TELEGRAM_CHANNEL_URL` to'g'riligini tekshiring.
