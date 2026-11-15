# All Black Limo LLC — Seattle Chauffeur Experience

A luxury, conversion-focused web application built for **All Black Limo LLC (Seattle, WA)** as part of the **Saywa Digital** Web Developer practical assessment.

🔗 **Live Demo:** https://all-black-limo.vercel.app/
📦 **Repository:** [https://github.com/AnmolSrivastava3000/all-black-limo](https://github.com/AnmolSrivastava3000/all-black-limo)

---

## Key Features Implemented

- **Editorial Luxury Aesthetic**: Crafted with obsidian (`#0A0A0C`) and charcoal (`#121316`) surfaces paired with restrained champagne gold (`#C5A059`) accents, `Cormorant Garamond` serif display headings, and `Plus Jakarta Sans` UI typography.
- **Verified Regional Grounding**: Tailored specifically to All Black Limo LLC's Puget Sound operations—highlighting **SeaTac International Airport (SEA)**, **Boeing Field (BFI)**, **Pier 66 (Bell Street)** & **Pier 91 (Smith Cove)** cruise terminals, and executive coverage across Seattle, Bellevue, Redmond, Kirkland, Tacoma, and Gig Harbor.
- **Interactive Demo Quote Engine**: Validates all 6 core trip parameters (Pickup, Drop-off, Date, Time, Passengers, and Vehicle Class), offers quick-select Seattle hub chips, prevents identical pickup/drop-off entries, and presents a transparent confirmation state with pre-filled dispatch email handoff (`reservations@allblacklimoseattle.com`).
- **Centralized Configuration & Safe Staging Contact**: All business metadata, fleet specifications, service tiers, and client testimonials are managed from a single source of truth (`lib/data.ts`). Click-to-call CTAs (`tel:+18005550199` / `(800) 555-0199`) use a standard NANPA reserved `555-01XX` staging number so evaluators can test mobile and desktop `tel:` triggers safely without dialing live dispatch lines.
- **Technical SEO & Accessibility**: Includes `LocalBusiness` + `LimousineService` Schema.org JSON-LD structured data, Open Graph metadata, semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), `aria-expanded` mobile drawer controls, `focus-visible` keyboard rings, and accessible form validation alerts.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom luxury color tokens and CSS variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Project Structure

```text
