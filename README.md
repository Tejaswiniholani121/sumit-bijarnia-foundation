# Sumit Bijarnia Foundation — Final Website V2

React + Vite website for the Sumit Bijarnia Foundation.

## Final content updates included

- Home content and sequence refreshed
- Five standard focus areas used site-wide: Skin Health, Healthcare, Education, Rural Development, Community Well-being
- New client-approved focus-area images included locally
- About Sumit story expanded, including the original 1% idea and current 5% commitment
- Our Initiatives restructured and standardised
- Our Commitment fully refreshed with Bare Chemistry story, founding team and the 5% of every sale commitment
- New Our Promise page
- Support Us refreshed with live Razorpay donation link
- Contact page updated with .org email, WhatsApp, address and revised form
- Footer includes Section 8 / CIN / 12AB / 80G / NPO DARPAN trust information
- Privacy Policy and Terms of Use included
- Foundation and Bare Chemistry logo treatments cleaned for seamless backgrounds
- Responsive V2 styling and a softer animated hero background

## Donation link

The central donation URL is set in `src/config/site.js`:

`https://razorpay.me/@sumitbijarniafoundation`

All Donate buttons use the same setting.

## Local setup

```bash
npm install
npm run dev
```

Build test:

```bash
npm run build
```

## Deploy

The project is configured for Vercel. With the GitHub repository connected, future updates can be deployed with:

```bash
git add .
git commit -m "Update website"
git push
```

Vercel will redeploy automatically.
