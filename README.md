# Sight 4 Eyes — Redesign v2

This version keeps the information/navigation from the original Sight 4 Eyes website
while reorganizing it into a cleaner, modern one-page design.

## Main change

Dr. James P. Wagner, OD is now a prominent part of the homepage in the About Us
section, using the photo currently published on the original Sight 4 Eyes website.

If you eventually host the new site independently, download the doctor's image from
the original site and save it as:

assets/dr-james-wagner.png

Then change the About section's image `src` to:
assets/dr-james-wagner.png

## Original content retained

- Home messaging
- About Us / Dr. James P. Wagner
- Exams
- GoodRx Prescription Savings and the three original coupon PDF links
- Contact Lenses and listed brands
- Insurance provider section (no separate page/link)
- Store Hours / Location
- Phone and fax
- Se Habla Español
- Original business hours

## Important

The original Insurance page was returning a temporary server error while this
prototype was prepared, so its unknown contents were not invented. The new page
keeps a direct link to that original page.

The GoodRx coupon PDFs are old files from the original site. Their displayed prices
should not be treated as current prices.

Open `index.html` in a browser, or use VS Code + Live Server.


## Final structure

The current design is intentionally a single-page website. The navigation scrolls to
each section (About, Exams, Contact Lenses, GoodRx, Insurance, Location) instead of
sending visitors through a bunch of separate pages. For a small local optometry
practice, this keeps the experience simple and makes the important information easy
to find.

If the site grows later, sections can be split into separate pages without throwing
away the design.


## Online booking

The site now has prominent **Book Online** buttons in the header, hero, booking
section, and footer. They open the practice's current Square appointment scheduler:
https://square.site/book/JVJCF17SCYTRK/sight-4-eyes-franklin-wi

The scheduler currently offers Eye Exam, Office Visit, Contact Lens Class, and
Dr. James P. Wagner appointment options.


## English / Spanish

The site includes an EN / ES switcher in the header. Translations are built into `script.js`, so the site does not rely on an automatic translation widget. The visitor's language choice is saved in the browser.

## Feedback update

This version adds the requested friend/client feedback:
- Warm, inviting people-wearing-glasses hero photo.
- Contact lens list updated to the requested brands: Acuvue 2, Acuvue Oasys, Acuvue 1 Day, Acuvue Multifocal, Air Optix, Air Optix Colors, Air Optix Night & Day, Precision 7, Total 30, Ultra, and Ultra Toric.
- Insurance section updated with the requested plans/providers and a VSP out-of-network reimbursement note.
- "Walk-ins welcome" and "Most glasses in 1 hour" messaging added.
- Separate Eye Health Blog page plus dedicated pages for glaucoma, cataracts, macular degeneration, and diabetic retinopathy.
- Basic LocalBusiness structured data and descriptive page titles/meta descriptions added to help search engines understand the business.

Search note: listing contact lens brands and useful patient education gives search engines more relevant content to understand, but no website can guarantee that a particular brand search will rank or "trigger" the site. The goal is useful, accurate, people-first content rather than keyword stuffing.
