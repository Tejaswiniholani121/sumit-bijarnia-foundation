# Sumit Bijarnia Foundation — Client Revision V3

Implemented from the client change document supplied in October 2026.

## Completed changes

1. Added a full **Registration & Tax Information** page with Section 8, CIN, NPO DARPAN, 12AB, 80G, donor-detail guidance, documentation flow, FAQ and donor notes.
2. Reworked all **Donate** CTAs: they now open an internal donor-information form first, then continue to the official payment page after successful form delivery.
3. Donation form sends donor details to **hello@sumitbijarniafoundation.org** via the configured form-delivery endpoint.
4. Added the final Commitment copy: **“Care doesn’t stop at the product. It can become part of something bigger.”** with both CTAs.
5. Footer tagline kept as a single-line treatment on desktop.
6. Removed **Donate Now** from footer links.
7. Rebuilt footer columns so Support / Legal / Registered Office align cleanly.
8. Added **Registration & Tax Information** under Legal.
9. Header navigation changed from **Contact** to **Contact Us**.
10. Replaced footer credential pills with a cleaner dot-separated credential line.
11. Tightened About-page story spacing and removed large empty grid gaps.
12. Added real imagery to the About and Initiatives pages to reduce text-heavy sections.
13. Added an image-led **Our Initiatives** hero and tightened the Looking Ahead → final CTA transition.
14. Replaced all four Bare Chemistry founder portraits with the client-supplied updated images and standardized their crop/size.
15. Strengthened the divider line between Bare Chemistry and Foundation logos.
16. Reformatted the About closing statement as:
    - In his name.
    - Through action.
    - For lives that can be changed.
17. Rebuilt Support Us donation section without visible payment-provider branding.
18. Added a different client-supplied Sumit image to avoid repeating the same portrait everywhere.
19. Separated the black Commitment relationship card from the blue footer with a white visual break.
20. Added client-supplied community, rural, education and healthcare images across relevant sections.
21. Added the requested **subtle live image blend** to the Home hero using real social-impact imagery with slow crossfade/zoom motion.
22. Preserved responsive/mobile behaviour and added responsive rules for all new V3 sections.

## Donation form note

The form uses the endpoint configured in `src/config/site.js`:

`https://formsubmit.co/ajax/hello@sumitbijarniafoundation.org`

FormSubmit may send a one-time activation email to the Foundation address on the first test submission. Open that email and approve/activate the form before going live. After activation, test once more and confirm the donor details arrive correctly before making a real donation.

The payment destination remains centrally configured as:

`https://razorpay.me/@sumitbijarniafoundation`
