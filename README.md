# Sumit Bijarnia Foundation - Website

Premium React + Vite website for the Sumit Bijarnia Foundation.

## 1) Install

Open the project folder in VS Code, then open the integrated terminal and run:

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

Vite will show a local URL such as `http://localhost:5173`. Open it in your browser.

## 3) Add the Razorpay / donation link

Open:

`src/config/site.js`

Change:

```js
donationUrl: '',
```

to the official Foundation payment page URL, for example:

```js
donationUrl: 'https://your-official-payment-link.example',
```

Every Donate button reads the same value. Until a real link is added, the website intentionally shows "Donation gateway coming shortly" instead of using a fake payment link.

## 4) Contact details, social links and 5% wording

All of these are centralized in:

`src/config/site.js`

You can update:
- phone
- email
- Instagram
- Facebook
- YouTube
- LinkedIn
- donation URL
- Bare Chemistry 5% commitment wording

## 5) Production build

```bash
npm run build
```

The production files will be created in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Main pages

- `/` Home
- `/about-sumit` About Sumit
- `/initiatives` Our Initiatives
- `/commitment` Bare Chemistry / Our Commitment
- `/support` Support Us
- `/contact` Contact
- `/privacy` Privacy placeholder
- `/terms` Terms placeholder

## Typography note

The project uses `Borscha` as the first display-font preference and `Inter` as the safe web fallback. A Borscha font file is not bundled in this project. If the Foundation has a licensed Borscha webfont, add it locally and declare it with `@font-face` in `src/styles/global.css`.

## Important launch notes

- The Privacy and Terms pages are starter placeholders and should be reviewed before a public launch.
- The contact form currently opens the visitor's default email application with the enquiry pre-filled. A hosted form service can be connected later without adding a full backend.
- No impact numbers, beneficiaries, testimonials or completed programme claims have been invented.
- The Bare Chemistry logo used on the website was cropped directly from the supplied brand PDF so its original colours remain intact.
