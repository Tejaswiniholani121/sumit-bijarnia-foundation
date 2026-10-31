# Final Deployment Checklist — Client Revision V3

## 1. Local setup
From the project folder (the folder containing `package.json`):

```powershell
npm install
npm run dev
```

## 2. Visual QA
Check at minimum:
- Home hero live image blend
- Home focus cards
- About story spacing and alternate Sumit image
- Initiatives hero / image sections
- Commitment founder portraits and logo divider
- Support donation invitation
- Donate form
- Registration & Tax Information page
- Contact Us navigation label
- Footer alignment and legal links

Test desktop and mobile widths around 375px, 430px, 768px and 1024px.

## 3. Donation form activation
1. Open `/donate`.
2. Submit a test form using non-sensitive test information.
3. Check `hello@sumitbijarniafoundation.org` for a FormSubmit activation email if this is the first submission.
4. Activate it if requested.
5. Submit a second test and confirm the donor details reach the Foundation email.
6. Confirm the successful form then redirects to the official payment page.

Do not use a real PAN during testing.

## 4. Production build
```powershell
npm run build
```

## 5. Push changes
```powershell
git add .
git commit -m "Implement final client website revisions"
git push
```

Vercel should redeploy automatically from the main branch.

## 6. Final live checks
- All internal routes load directly without 404
- Donate buttons go to `/donate`, not directly to payment
- Donation form email delivery works
- Payment redirect works
- WhatsApp/social links work
- Footer registration link opens `/registration-tax`
- HTTPS/custom domain remain healthy
