# 🗣️ SpeechBud — AI-Powered Speech Therapy for Filipino Children

> **Your AI Partner in Communication Growth**

SpeechBud is a web-based platform that makes professional-grade speech therapy accessible, affordable, and engaging for Filipino children aged 2–12. Powered by AI-driven pronunciation analysis and designed in collaboration with PRC-licensed Speech-Language Pathologists (SLPs), SpeechBud delivers therapist-quality exercises through a fun, gamified experience that children actually look forward to.

Built with the Philippine market in mind, SpeechBud addresses the accessibility gap in pediatric speech therapy — where in-person sessions can cost ₱650–₱3,000 each — by offering unlimited AI-guided practice for a fraction of the cost.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Pricing Model](#pricing-model)
- [Partner Organizations](#partner-organizations)
- [Compliance & Privacy](#compliance--privacy)
- [Team](#team)
- [License](#license)

---

## Overview

SpeechBud was created to bridge the gap between the high cost of traditional speech therapy and the growing number of Filipino families who need it. With over 1 in 12 children in the Philippines experiencing some form of speech or language delay, access to consistent, quality therapy remains a challenge — especially outside Metro Manila.

SpeechBud combines:
- **AI-powered real-time feedback** on pronunciation and articulation
- **Gamified exercises** designed by certified SLPs to keep children engaged
- **Progress tracking dashboards** for parents, guardians, and therapists
- **Multi-language support** for Filipino, English, and regional languages
- **DepEd SPED-compatible reports** for school coordination

---

## Features

| Feature | Description |
|---|---|
| 🎙️ AI Pronunciation Feedback | Real-time analysis of a child's speech with gentle, encouraging corrections |
| 🎮 Gamified Exercises | Interactive mini-games and reward badges that make practice feel like play |
| 📊 Progress Tracking | Detailed weekly reports for parents, guardians, and therapists |
| 🧑‍⚕️ Therapist-Designed Content | All exercises crafted by PRC-licensed SLPs under RA 11249 |
| 🇵🇭 Filipino & Multi-Language | Supports Filipino, English, and regional Philippine languages |
| 🏫 DepEd SPED Integration | Pro plan generates SPED-compatible reports for school coordination |
| 🔒 Data Privacy Compliant | Fully compliant with the Philippine Data Privacy Act (RA 10173) |
| 💳 PH Payment Methods | Accepts GCash, Maya, credit/debit cards, and online banking |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev) via [Vite 8](https://vite.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (Vite plugin) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com) |
| **Font** | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| **Build Tool** | Vite with `@tailwindcss/vite` plugin |
| **Package Manager** | npm |

---

## Pages

### 🏠 Home (`/`)
The main landing page. Includes:
- Hero section with headline, subheadline, and dual CTA buttons
- Partner organizations strip (PASP, ASP, DepEd SPED, SEAMEO SEN, PRC)
- 6-card features grid
- 4-step "How It Works" process section
- Auto-sliding testimonial carousel (7 testimonials, mixed English/Tagalog/Taglish)
- Bottom CTA conversion banner

### 💰 Pricing (`/pricing`)
Transparent pricing page. Includes:
- Monthly/yearly billing toggle with savings indicator
- 3 plan cards: **Libre** (Free), **Pamilya** (₱125–₱149/mo), **Pro/Klinika** (₱599–₱799/mo)
- PH payment methods note (GCash, Maya, etc.)
- FAQ accordion in Taglish
- CTA banner

### 🏢 About (`/about`)
Company story and credibility page. Includes:
- Origin story and mission statement
- Stats strip (275+ families, 3 languages, 98% satisfaction, founded 2026)
- Mission section with PH therapy cost context
- Core values grid
- Partner organizations section with descriptions and official links
- Team member cards (PH-based team)
- CTA banner

### 📬 Contact (`/contact`)
Contact and inquiry page. Includes:
- 3 contact info cards (email, live chat PST, PH location)
- Full contact form with PH-specific subject options (SLP Partnership, DepEd SPED)
- SLP partnership card (mentions RA 11249 and PRC licensing)
- DepEd SPED school partnership card
- Response time guarantee

---

## Project Structure

```
speechbud/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav: logo | links | CTA + mobile hamburger
│   │   └── Footer.jsx          # 4-column footer with brand, links, copyright
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx        # Landing page with testimonial carousel
│   │   ├── Pricing/
│   │   │   └── Pricing.jsx     # ₱ pricing plans + FAQ accordion
│   │   ├── About/
│   │   │   └── About.jsx       # Story, partners, team
│   │   └── Contact/
│   │       └── Contact.jsx     # Contact form + PH-specific info cards
│   ├── App.jsx                 # Root component with all 4 routes
│   ├── main.jsx                # Entry point with BrowserRouter
│   └── index.css               # Tailwind v4 + Inter font import
├── vite.config.js              # Vite config with Tailwind v4 plugin
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Krivr12/SpeechBud.git
cd SpeechBud

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready for deployment to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## Design System

SpeechBud uses a **"Calm & Playful Growth"** design theme built for children and their parents.

| Token | Value | Usage |
|---|---|---|
| **Background** | `#FDFBF7` (Soft Cream) | Page background |
| **Primary** | `teal-600` / `sky-500` | Brand color, nav links, section accents |
| **Secondary** | `amber-400` / `orange-500` | Badges, highlights, energy accents |
| **CTA** | `emerald-500` → `emerald-600` | All action buttons |
| **Text** | `slate-800` | Body and heading text |
| **Font** | Inter (400–900) | All typography |

**Animation:** Framer Motion `fadeUp` variants with staggered `custom` delays. All scroll-triggered animations use `whileInView` with `once: true` for performance.

**Buttons:** Pill-shaped (`rounded-full`) with generous padding. Hover states use shadow elevation and color deepening.

---

## Pricing Model

Based on the SpeechBud financial model targeting the Philippine market:

| Plan | Monthly | Annual | Target Users |
|---|---|---|---|
| **Libre** | Free | Free | General public / trial |
| **Pamilya** | ₱149/mo | ₱1,500/yr (₱125/mo) | Families with 1–3 children |
| **Pro / Klinika** | ₱799/mo | ₱7,188/yr (₱599/mo) | SLP clinics, SPED centers |

**Break-even analysis (Year 1):**
- Fixed costs: ₱300,000
- Variable cost per user: ₱300
- Subscription price: ₱1,500/user/year
- **Break-even point: 250 paying subscribers**
- Year 1 target: **275 users** → projected net income of ₱30,000

**Projected growth:**
- 2026: 275 users → ₱412,500 revenue → ₱30,000 net income
- 2027: 500 users → ₱750,000 revenue → ₱240,000 net income
- 2028: 900 users → ₱1,350,000 revenue → ₱630,000 net income

---

## Partner Organizations

SpeechBud is built in alignment with the following Philippine and Southeast Asian organizations:

| Organization | Type | Website |
|---|---|---|
| **PASP** — Philippine Association of Speech-Language Pathologists | 🇵🇭 PH | [pasp.org.ph](https://www.pasp.org.ph) |
| **Autism Society Philippines (ASP)** | 🇵🇭 PH | [autismsocietyphilippines.org](http://www.autismsocietyphilippines.org) |
| **DepEd SPED Program** — Department of Education | 🇵🇭 PH | [deped.gov.ph](https://www.deped.gov.ph) |
| **SEAMEO SEN** — Regional Centre for Special Educational Needs | 🌏 SEA | [seameosen.edu.my](https://seameosen.edu.my) |
| **PRC** — Professional Regulation Commission | 🇵🇭 PH | [prc.gov.ph](https://www.prc.gov.ph) |

---

## Compliance & Privacy

SpeechBud is designed with Philippine legal compliance at its core:

| Law | Relevance |
|---|---|
| **RA 10173** — Data Privacy Act of 2000 | All user data is encrypted and never sold. Compliant with NPC guidelines. |
| **RA 11249** — Speech-Language Pathology Act of 2019 | All SLP contributors are PRC-licensed and registered under this Act. |
| **RA 8792** — E-Commerce Act of 2000 | Electronic registrations, consent forms, and digital agreements are legally valid. |

---

## Team

| Name | Role |
|---|---|
| **Dr. Ana Reyes, ReSP** | Co-Founder & Chief Speech-Language Pathologist |
| **Carlo Mendoza** | Co-Founder & Chief Technology Officer |
| **Bea Santos** | Head of Design |
| **Sir Mark Villanueva** | Head of Education (DepEd SPED background) |

---

## License

© 2026 SpeechBud. All rights reserved.

This project is proprietary software. Unauthorized copying, distribution, or modification of this codebase is prohibited without explicit written permission from the SpeechBud team.

---

<div align="center">
  <strong>Speech<span style="color:#FBBF24">Bud</span></strong> — Made with ❤️ for little voices everywhere 🇵🇭
</div>
