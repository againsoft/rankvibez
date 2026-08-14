# RankVibez — Internal Software & Technology Company Website
## Claude Code Master Project Brief / Implementation Specification

> **Project:** RankVibez  
> **Domain:** https://www.rankvibez.com/  
> **Website Type:** Internal / Corporate Software & Technology Company Website  
> **Primary Goal:** Build a premium international software company website that presents RankVibez as an AI-first technology partner, similar in positioning quality to modern companies such as AgainSoft, but with a stronger AI-centric identity and a premium dark visual system.

---

# 1. PROJECT VISION

RankVibez should feel like a serious international software and technology company — not a small local agency.

The website must communicate:

- AI-first technology
- Enterprise software development
- ERP and business automation
- E-commerce technology
- Web application development
- Cloud/server infrastructure
- Cyber security
- Digital marketing and SEO
- Professional business email
- AI transformation
- Virtual assistance
- Long-term technology partnership

The overall impression should be:

> **Modern + International + AI-first + Enterprise + Premium + Trustworthy + Technical**

Do NOT make the website look like a generic digital marketing agency.

It should feel closer to a modern technology company / software solutions group.

---

# 2. BRAND POSITIONING

## Primary Positioning

RankVibez is an AI-driven software and technology solutions company helping businesses build, automate, secure, market and scale their digital operations.

## Suggested Brand Statement

**Build Smarter. Automate Faster. Grow with AI.**

Alternative supporting statement:

> We build AI-powered software, digital infrastructure and growth systems for modern businesses.

## Core Brand Message

RankVibez should position itself as a technology partner rather than simply a service provider.

Use language such as:

- Technology Partner
- Digital Transformation Partner
- AI Transformation Partner
- Software Engineering Partner
- Business Automation Partner
- Cloud & Infrastructure Partner
- Digital Growth Partner

Avoid overusing words like:

- Cheap
- Affordable
- Freelancer
- Small team
- Basic service

The website should communicate premium B2B value.

---

# 3. DESIGN DIRECTION

## Overall Theme

Use a **modern premium dark theme**.

The website should be visually inspired by:

- modern SaaS companies
- AI companies
- enterprise technology companies
- premium software development companies
- modern cloud platforms

Do NOT simply copy another website.

Create an original RankVibez design language.

## Color Direction

Use the color vibe from the provided RankVibez reference image/logo.

If the reference asset is available to Claude Code, extract the dominant brand colors from it and use them consistently.

Recommended fallback palette if the reference colors cannot be extracted:

- Background: near-black / deep charcoal
- Surface: dark graphite
- Primary accent: brand violet / electric purple
- Secondary accent: cyan / electric blue
- Text: white / soft white
- Muted text: cool gray
- Borders: subtle dark gray
- Gradient: purple → blue / cyan

Do not use excessive gradients.

Gradients should be used strategically for:

- hero glow
- AI sections
- CTA buttons
- cards
- background lighting
- decorative orbs

---

# 4. VISUAL LANGUAGE

Use:

- large typography
- generous spacing
- glassmorphism only where appropriate
- subtle borders
- soft shadows
- animated gradients
- abstract AI/network visuals
- grid backgrounds
- glowing accents
- floating cards
- micro-interactions
- scroll animations
- smooth transitions

Avoid:

- excessive rounded cards everywhere
- childish illustrations
- generic stock photos
- excessive animations
- overly colorful UI
- template-looking sections

The site should feel premium and controlled.

---

# 5. TECH STACK

Preferred implementation:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide icons
- Framer Motion / Motion for animations
- Responsive design
- SEO optimized
- Semantic HTML
- Component-driven architecture

Use reusable components.

Suggested structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   ├── solutions/
│   ├── industries/
│   ├── portfolio/
│   ├── technology/
│   ├── locations/
│   ├── contact/
│   └── careers/
│
├── components/
│   ├── layout/
│   ├── navbar/
│   ├── hero/
│   ├── services/
│   ├── solutions/
│   ├── portfolio/
│   ├── partners/
│   ├── industries/
│   ├── ai/
│   ├── locations/
│   ├── testimonials/
│   ├── footer/
│   └── ui/
│
├── data/
│   ├── services.ts
│   ├── portfolio.ts
│   ├── partners.ts
│   ├── locations.ts
│   └── industries.ts
│
└── lib/
```

Keep content data-driven so future CMS integration is easy.

---

# 6. IMPORTANT BUSINESS RULE

This is an **internal corporate website**.

Do NOT build a public pricing-first SaaS website.

If pricing appears anywhere:

- use **USD**
- format prices professionally
- use `$`
- never show BDT
- never show local currency
- pricing should be secondary to consultation / solution positioning

For enterprise services, prefer:

> Request a Consultation

> Talk to an Expert

> Get a Custom Quote

instead of aggressively displaying prices.

---

# 7. PRIMARY NAVIGATION

Create a professional navigation.

Suggested:

```text
Home
Solutions
Services
Industries
AI
Portfolio
Technology
About
Locations
Contact
```

Possible CTA:

**Let's Build Together**

or

**Talk to an Expert**

Add a small top-level "AI" navigation item because AI is a major strategic differentiator.

---

# 8. HOMEPAGE STRUCTURE

The homepage should be the strongest page.

Recommended structure:

```text
1. Announcement / Trust Bar
2. Navbar
3. Hero
4. Technology / Trust Strip
5. Core Capabilities
6. AI-First Section
7. Services
8. Enterprise Solutions
9. Industries
10. Featured Portfolio
11. Technology Ecosystem
12. Global Presence
13. Why RankVibez
14. Process
15. Testimonials
16. CTA
17. Modern Footer
```

---

# 9. HERO SECTION

The hero must immediately communicate that RankVibez is an AI-first technology company.

## Suggested headline

**Build the Future with AI-Driven Technology**

Alternative:

**Software. AI. Automation. Growth. — Built for the Modern Business.**

Supporting copy:

> RankVibez helps businesses build intelligent software, automate operations, strengthen infrastructure and accelerate digital growth through AI-powered technology.

Primary CTA:

**Start a Project**

Secondary CTA:

**Explore Our Solutions**

Hero visual:

Create a premium abstract AI/software environment.

Possible visual elements:

- AI neural network
- data streams
- glowing nodes
- software architecture
- dashboard fragments
- cloud infrastructure
- automation flows

Do NOT use a generic robot image.

---

# 10. HERO TRUST SIGNALS

Immediately below the hero, show concise credibility indicators.

Example:

```text
AI-First Technology
Enterprise Software
Cloud & Infrastructure
Digital Growth
Global Delivery
```

If real company statistics are available, show:

- Projects Delivered
- Clients Served
- Countries Served
- Years of Experience
- Team Members

Do NOT invent statistics.

If data is not verified, use capability-based trust indicators instead.

---

# 11. AI-FIRST SECTION

AI must be one of the biggest visual sections of the entire website.

Title:

**AI Is Not the Future. It's the Infrastructure of Modern Business.**

Copy:

> We integrate artificial intelligence into software, workflows, customer experiences and business operations to help organizations work smarter and scale faster.

Show capabilities:

### AI-Driven ERP
Intelligent enterprise resource planning with AI-assisted operations, analytics and automation.

### AI Business Automation
Automate repetitive workflows and connect business processes through intelligent agents.

### AI Customer Operations
AI-powered customer support, lead qualification, recommendations and communication.

### AI Analytics
Turn business data into actionable insights and decision support.

### AI Agents
Deploy specialized AI agents for sales, operations, support, marketing and administration.

### AI Transformation
Assess existing business operations and identify practical AI opportunities.

Add an interactive visual showing:

```text
Business Data
      ↓
AI Intelligence Layer
      ↓
Automation
      ↓
Business Actions
      ↓
Insights & Growth
```

---

# 12. SERVICE ARCHITECTURE

Organize the requested services into professional service categories.

## Category A — Enterprise Software

### ERP Software
Custom ERP systems for finance, HR, inventory, sales, purchasing, manufacturing and operations.

### AI-Driven ERP
ERP systems enhanced with AI agents, automation, recommendations and intelligent analytics.

### E-Commerce Solutions
Custom e-commerce platforms, marketplaces, product management, order management and integrations.

### Company Website
Corporate websites, business portals, landing pages and enterprise web applications.

---

## Category B — Cloud & Infrastructure

### Server Maintenance
Linux/Windows server management, monitoring, optimization, backups, security and troubleshooting.

### Cloud Infrastructure
Cloud deployment, migration, scaling, monitoring and infrastructure architecture.

### Professional Email Service
Business email setup, migration, security, DNS, SPF, DKIM, DMARC and administration.

---

## Category C — Cyber Security

### Cyber Security
Website, server and business infrastructure security.

Capabilities:

- security assessment
- vulnerability review
- server hardening
- access control
- malware detection
- backup strategy
- firewall configuration
- monitoring
- incident support
- security best practices

---

## Category D — Digital Growth

### Digital Marketing
Full-funnel digital marketing strategies for business growth.

### SEO
Technical SEO, on-page SEO, content strategy, local SEO, international SEO and analytics.

### Ads Campaign
Google Ads, Meta Ads and performance advertising campaigns.

### Conversion Optimization
Landing pages, analytics, funnel optimization and conversion improvement.

---

## Category E — AI & Business Transformation

### AI-Driven Company
AI transformation programs for companies that want to integrate AI into daily operations.

### AI Automation
Automate repetitive business processes with workflows and AI agents.

### Virtual Assistance
Professional virtual assistance for administrative, customer service, data and operational tasks.

---

# 13. SERVICE CARDS

Each service card should contain:

- icon
- category
- service name
- short description
- key capabilities
- "Explore Service"
- subtle hover animation

Do not make every card identical.

Use visual hierarchy.

---

# 14. ENTERPRISE SOLUTIONS

Create a section called:

**Technology Solutions Built Around Your Business**

Show solutions such as:

- ERP & Business Management
- E-Commerce
- Corporate Digital Platform
- AI Transformation
- Cloud Infrastructure
- Cyber Security
- Digital Growth
- Business Automation
- Managed Technology Services

Use solution cards with visual diagrams rather than only text.

---

# 15. INDUSTRIES

Create a professional industries section.

Possible industries:

- Retail
- E-Commerce
- Manufacturing
- Healthcare
- Education
- Finance
- Real Estate
- Logistics
- Hospitality
- Professional Services
- Technology
- NGOs / Non-Profit

Each industry should explain how RankVibez can help.

Do not claim specialized certifications or regulated compliance unless verified.

---

# 16. PORTFOLIO

Portfolio is very important.

Create a premium case-study system.

Each project should have:

- project name
- client / brand name
- industry
- country
- services provided
- technology
- project summary
- challenge
- solution
- outcome
- screenshots
- live project link where available

Portfolio categories:

```text
All
Software
ERP
E-Commerce
Corporate Websites
AI
Infrastructure
Digital Growth
```

---

# 17. INTERNATIONAL PORTFOLIO

Show selected international projects separately.

Section title:

**Built for Businesses Around the World**

Display country/region indicators:

- Bangladesh
- United States
- United Kingdom
- Canada
- UAE
- Saudi Arabia
- Australia
- Europe
- Asia

Only show actual client/project countries when verified.

Do not fabricate clients.

If sample/demo projects are used, clearly label them:

**Concept Project**

or

**Internal Demo**

---

# 18. WEBSITE / DIGITAL EXPERIENCE PORTFOLIO

Create a dedicated showcase for websites.

Examples of portfolio categories:

### Corporate Websites
Modern websites for companies and organizations.

### E-Commerce Websites
High-performance online stores and marketplaces.

### SaaS Platforms
Business dashboards and subscription platforms.

### ERP Interfaces
Enterprise administration systems.

### AI Products
AI-powered applications and agent interfaces.

Use large visual cards with screenshots.

---

# 19. TECHNOLOGY ECOSYSTEM / PARTNERS

Create a section:

**Technology Ecosystem**

or

**Built on the World's Leading Technology Platforms**

Potential technology ecosystem logos:

- Microsoft
- Google Cloud
- AWS
- Cloudflare
- GitHub
- OpenAI
- Stripe
- Vercel
- Docker
- PostgreSQL

IMPORTANT:

Do NOT falsely state that RankVibez is an official partner, reseller, certified provider or authorized dealer unless the company actually has that status.

If official partnership status is verified, show:

**Microsoft Partner**

or the exact official designation.

Otherwise use neutral wording:

**Technology Ecosystem**

**Platforms We Work With**

This distinction is important for legal and brand credibility.

---

# 20. PARTNER SECTION DESIGN

Use a premium logo wall.

Example:

```text
Technology Ecosystem

Microsoft     Google Cloud     AWS
Cloudflare    GitHub           OpenAI
Stripe        Vercel           Docker
```

Use grayscale logos by default.

On hover:

- logo becomes brighter
- subtle brand glow
- small tooltip

Avoid making the logos look like fake sponsorships.

---

# 21. GLOBAL PRESENCE

Create a strong international locations section.

Title:

**Global Reach. Local Understanding.**

Show locations in cards/map format.

Suggested structure:

### Bangladesh
Dhaka
Head Office / Technology Operations

### United States
International Business / Client Operations

### United Kingdom
International Business / Client Operations

### UAE
Middle East Business Operations

### Saudi Arabia
Middle East Market

### Canada
International Business

### Australia
International Business

IMPORTANT:

Do NOT invent actual street addresses, offices or branches.

Only display addresses that are actually owned, operated or officially represented by RankVibez.

If a location is only a service market, label it:

**Serving Clients In**

rather than:

**Office**

This is critical.

---

# 22. COMPANY / ABOUT PAGE

Create a premium About page.

Sections:

1. Company Overview
2. Mission
3. Vision
4. Values
5. AI-First Philosophy
6. Leadership
7. Team
8. Global Delivery
9. Technology Stack
10. Why RankVibez

Suggested mission:

> To help businesses operate, compete and grow through intelligent software and technology.

Suggested vision:

> To become a globally trusted AI-first technology company for modern businesses.

---

# 23. WHY RANKVIBEZ

Create a section with 6–8 strong differentiators.

Examples:

### AI-First
We design AI into the product and workflow rather than adding it as an afterthought.

### Business Understanding
Technology is built around real business processes.

### Full Technology Stack
Software, cloud, infrastructure, security and growth under one technology partner.

### Scalable Architecture
Systems designed to evolve as the business grows.

### Security Mindset
Security and reliability are considered from the beginning.

### Global Delivery
Built to support international businesses and distributed teams.

### Long-Term Partnership
We focus on continuous improvement, not one-time delivery.

---

# 24. TECHNOLOGY PAGE

Create a dedicated technology page.

Sections:

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Python
- FastAPI
- Node.js
- REST APIs

### Database
- PostgreSQL
- Redis

### Cloud
- AWS
- Google Cloud
- Microsoft Azure
- Cloudflare
- Vercel

### DevOps
- Docker
- GitHub
- CI/CD
- Monitoring

### AI
- LLM APIs
- AI Agents
- RAG
- Automation
- AI Analytics
- AI Orchestration

Only show technologies actually used by the company. Keep the list editable from a data file.

---

# 25. PROCESS SECTION

Title:

**From Idea to Intelligent Business System**

Show:

```text
01 — Discover
Understand the business and goals.

02 — Strategize
Define technology and AI opportunities.

03 — Design
Create UX, architecture and workflows.

04 — Build
Develop the software and integrations.

05 — Secure
Test, harden and validate the system.

06 — Launch
Deploy to production.

07 — Grow
Monitor, optimize and continuously improve.
```

Use animated timeline behavior.

---

# 26. TESTIMONIALS

Create a testimonial section.

Important:

Do not invent testimonials.

Create placeholder content structure so verified testimonials can later be added.

Each testimonial:

- quote
- client name
- designation
- company
- country
- company logo

If no verified testimonials exist, temporarily show:

**Trusted by businesses building their next stage of growth.**

---

# 27. CTA SECTION

Large final CTA.

Headline:

**Ready to Build What's Next?**

Copy:

> Whether you need an ERP, e-commerce platform, AI transformation, secure infrastructure or a complete digital growth strategy — let's build it together.

Buttons:

**Start a Conversation**

**Explore Our Services**

---

# 28. FOOTER

The footer should be modern and significantly better than a traditional corporate footer.

Use a multi-column footer.

Suggested structure:

```text
RANKVIBEZ

AI-driven software and technology solutions
for modern businesses.

Solutions
- ERP
- AI ERP
- E-Commerce
- AI Automation
- Cyber Security
- Cloud

Services
- Software Development
- Website Development
- Server Maintenance
- Professional Email
- SEO
- Digital Marketing
- Ads Campaign
- Virtual Assistance

Company
- About
- Portfolio
- Technology
- Locations
- Careers
- Contact

Resources
- Insights
- Case Studies
- Documentation
- FAQ

Contact
- Email
- Phone
- Address
```

Bottom area:

```text
© 2026 RankVibez. All rights reserved.

Privacy Policy
Terms of Service
Cookie Policy
```

Add social icons:

- LinkedIn
- Facebook
- Instagram
- YouTube
- X

Only link accounts that actually exist.

---

# 29. FOOTER VISUAL DESIGN

Make the footer distinctive.

Possible design:

- oversized RankVibez wordmark
- subtle AI network background
- animated gradient glow
- huge CTA
- large "Let's build something intelligent."
- curved / diagonal visual divider
- dark surface layers

The footer should feel like the final premium section of the website, not an afterthought.

---

# 30. RESPONSIVE DESIGN

Must work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile navigation:

- hamburger menu
- smooth drawer
- clear CTA
- no horizontal overflow

Cards should stack intelligently.

Hero typography should scale.

Do not simply shrink the desktop design.

---

# 31. ANIMATION SYSTEM

Use subtle professional animation.

Recommended:

- fade-up on scroll
- staggered card animation
- text reveal
- gradient movement
- hover elevation
- logo hover
- number counter only for verified statistics
- smooth page transitions
- floating AI nodes

Avoid:

- excessive bouncing
- flashy effects
- distracting animations
- animations that reduce usability

Respect `prefers-reduced-motion`.

---

# 32. SEO

Every page should have:

- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- Twitter/X metadata
- structured data where appropriate
- semantic headings
- optimized images
- alt text
- sitemap
- robots.txt

Suggested homepage title:

**RankVibez | AI-Driven Software & Technology Solutions**

Suggested description:

**RankVibez builds AI-driven ERP, e-commerce, software, cloud, cybersecurity and digital growth solutions for modern businesses.**

Do not keyword stuff.

---

# 33. INTERNAL CONTENT / ADMIN-FRIENDLY ARCHITECTURE

Even if no CMS is built now, structure content so it can be moved into a CMS later.

Use data files for:

- services
- portfolio
- locations
- industries
- partners
- technologies
- testimonials
- social links

Do not hard-code every repeated card directly inside page components.

---

# 34. CONTACT PAGE

Create a premium contact page.

Fields:

- Name
- Company
- Work Email
- Phone
- Country
- Service
- Budget
- Project Description

Budget options should be USD:

```text
Under $1,000
$1,000 – $5,000
$5,000 – $10,000
$10,000 – $25,000
$25,000+
Enterprise / Custom
```

Use USD only.

For larger projects, emphasize:

**Custom Proposal**

rather than fixed pricing.

---

# 35. SERVICE PRICING RULE

If any service pricing is displayed:

- USD only
- clean formatting
- no BDT
- no ৳
- no mixed currencies

Example:

```text
Starting at $499
```

or:

```text
From $1,500
```

For enterprise services:

```text
Custom Pricing
Talk to an Expert
```

Pricing should never dominate the website.

---

# 36. TRUST & COMPLIANCE

Do not make unverified claims.

Do not invent:

- Microsoft Partner status
- Google Partner status
- AWS Partner status
- certifications
- client logos
- client names
- office addresses
- revenue
- number of employees
- project counts
- awards
- testimonials
- security certifications

Create the UI so verified information can be inserted later.

---

# 37. INTERNATIONAL BRAND TONE

Use professional international English.

Tone:

- confident
- technical
- concise
- business-focused
- modern
- intelligent

Avoid overly salesy copy.

Instead of:

> We are the BEST company!

Use:

> We build technology systems designed around the way your business works.

Instead of:

> Cheap website development!

Use:

> High-performance digital experiences built for modern businesses.

---

# 38. KEY PAGES

Build these pages:

```text
/
 /solutions
 /services
 /services/erp
 /services/ai-erp
 /services/ecommerce
 /services/web-development
 /services/server-maintenance
 /services/business-email
 /services/digital-marketing
 /services/seo
 /services/cyber-security
 /services/virtual-assistance
 /services/ai-transformation
 /services/ads-campaign
 /industries
 /ai
 /portfolio
 /portfolio/[slug]
 /technology
 /about
 /locations
 /contact
 /careers
```

Do not create empty pages.

If a route is created, provide meaningful content or a proper "coming soon" state.

---

# 39. DESIGN SYSTEM

Create reusable tokens:

```text
background
surface
surface-elevated
border
foreground
muted
primary
primary-hover
secondary
success
warning
danger
```

Typography should use a modern professional font.

Possible choices:

- Inter
- Geist
- Manrope

Prefer one primary font family.

Use consistent:

- spacing
- radius
- shadows
- typography scale
- button styles
- card styles

---

# 40. ACCESSIBILITY

Implement:

- keyboard navigation
- visible focus states
- semantic buttons
- semantic links
- proper labels
- alt text
- sufficient contrast
- reduced motion support
- accessible mobile menu
- accessible forms

Do not sacrifice accessibility for visual effects.

---

# 41. PERFORMANCE

Optimize for:

- Core Web Vitals
- fast initial load
- image optimization
- lazy loading
- code splitting
- minimal client-side JavaScript
- optimized fonts
- responsive images

Use Next.js image optimization.

Avoid unnecessary heavy libraries.

---

# 42. SECURITY

For forms:

- validate inputs
- sanitize data
- prevent spam
- use server-side validation
- do not expose secrets
- use environment variables
- never commit API keys

---

# 43. CONTENT PLACEHOLDERS

When real information is missing, use clearly marked placeholders.

Example:

```text
[VERIFY: COMPANY ADDRESS]
[VERIFY: MICROSOFT PARTNER STATUS]
[VERIFY: GOOGLE PARTNER STATUS]
[ADD VERIFIED CLIENT LOGO]
[ADD VERIFIED TESTIMONIAL]
```

Do not silently invent information.

---

# 44. BRAND / LOGO HANDLING

Use the provided RankVibez logo/reference image as the primary visual reference.

Create:

- light logo variant
- dark logo variant if necessary
- favicon
- mobile mark if available

Maintain the original brand identity.

Do not distort the logo.

---

# 45. HOME PAGE CONTENT PRIORITY

Visual hierarchy must follow:

```text
AI
↓
Software
↓
Business Automation
↓
Cloud / Infrastructure
↓
Cyber Security
↓
Digital Growth
↓
Portfolio
↓
Global Presence
↓
Technology Ecosystem
↓
Contact
```

AI should be visually prominent throughout the site.

---

# 46. OPTIONAL AI INTERACTION

If appropriate, add a small AI interaction on the website.

Example:

**RankVibez AI Advisor**

User can ask:

> What technology does my business need?

The assistant can guide users toward:

- ERP
- E-commerce
- AI automation
- website
- cybersecurity
- cloud
- marketing

If implementing this, keep it optional and architect it so the AI API key stays server-side.

Do not make the AI widget obstructive.

---

# 47. PORTFOLIO VISUAL EXPERIENCE

Portfolio cards should look premium.

Example card:

```text
[Large Project Screenshot]

E-COMMERCE
International

Project Name

Modern commerce platform built for
high-volume product operations.

Next.js · FastAPI · PostgreSQL · Cloudflare

View Case Study →
```

Add hover motion.

---

# 48. GLOBAL PRESENCE VISUAL

Instead of a generic Google map embed, consider a stylized world map.

Show glowing points for verified operating locations.

Use labels such as:

```text
Dhaka
United States
United Kingdom
UAE
Saudi Arabia
Canada
Australia
```

Again: only represent actual offices/branches when verified. Otherwise label them as service markets.

---

# 49. PREMIUM DETAILS

Add small details that make the website feel enterprise-grade:

- availability status
- response-time statement only if true
- secure project workflow
- NDA available if true
- discovery call
- architecture review
- deployment support
- post-launch support
- documentation
- monitoring
- maintenance

Use these as trust indicators rather than fake statistics.

---

# 50. DO NOT DO

Do not:

- copy AgainSoft exactly
- copy Hostinger
- copy another company
- use generic agency templates
- overload the homepage with text
- use fake statistics
- use fake logos
- use fake addresses
- claim unverified partnerships
- use BDT pricing
- use low-quality stock images
- make everything neon
- overuse glassmorphism
- make AI look gimmicky
- use excessive animations
- create broken placeholder routes

---

# 51. IMPLEMENTATION PHASES

## STEP 01 — Project Audit

Inspect the existing repository.

Identify:

- framework
- current components
- existing styles
- logo
- assets
- routes
- package manager
- deployment configuration

Do not destroy existing working functionality without reason.

---

## STEP 02 — Brand System

Create:

- colors
- typography
- spacing
- buttons
- cards
- navigation
- footer
- responsive rules

Use the provided RankVibez visual reference.

---

## STEP 03 — Global Layout

Build:

- navbar
- mobile navigation
- global container
- page transitions
- footer
- CTA components

---

## STEP 04 — Homepage

Build the homepage according to the section hierarchy defined above.

Prioritize visual quality.

---

## STEP 05 — Services

Build the service listing and individual service pages.

Make the service architecture reusable.

---

## STEP 06 — AI

Build the AI landing page and AI-first sections.

AI must feel like a core capability, not a marketing decoration.

---

## STEP 07 — Portfolio

Build:

- portfolio grid
- filters
- case study layout
- project data model
- screenshots
- technology tags

---

## STEP 08 — Technology / Partners

Build technology ecosystem section and technology page.

Use verified claims only.

---

## STEP 09 — About / Locations

Build:

- company page
- global presence
- locations
- values
- mission
- vision

---

## STEP 10 — Contact

Build the contact form with USD budget options.

---

## STEP 11 — SEO

Implement:

- metadata
- sitemap
- robots
- structured data
- Open Graph
- canonical URLs

---

## STEP 12 — Performance & QA

Test:

- desktop
- tablet
- mobile
- Chrome
- Safari
- Firefox

Check:

- no overflow
- no console errors
- no broken links
- no missing images
- no layout shifts
- no accessibility blockers

---

# 52. FINAL QUALITY BAR

The final website should look like a company that can confidently approach:

- international businesses
- enterprise clients
- SaaS companies
- e-commerce companies
- manufacturers
- startups
- corporate organizations

The website must communicate:

> **"RankVibez can become the technology team behind your business."**

Not:

> "RankVibez is another web development agency."

---

# 53. CLAUDE CODE EXECUTION INSTRUCTION

When implementing this project:

1. First inspect the existing project.
2. Reuse useful existing infrastructure.
3. Do not rewrite the entire application unnecessarily.
4. Build the design system first.
5. Build reusable components.
6. Keep content data-driven.
7. Use the provided RankVibez visual reference.
8. Maintain a premium dark theme.
9. Make AI the strongest differentiator.
10. Keep all pricing in USD.
11. Never invent company claims.
12. Never claim partnership/certification without verification.
13. Never invent international offices.
14. Make the site fully responsive.
15. Optimize SEO and performance.
16. Test every route before completion.
17. Fix all TypeScript/lint/build errors.
18. Ensure there are no broken links or missing assets.

---

# 54. SUCCESS CRITERIA

The project is complete only when:

- [ ] RankVibez branding is consistent
- [ ] Dark premium theme is complete
- [ ] AI is visually prominent
- [ ] Homepage feels enterprise-grade
- [ ] Services are professionally categorized
- [ ] ERP and AI ERP are prominent
- [ ] E-commerce is prominent
- [ ] Cloud/server services are included
- [ ] Cybersecurity is included
- [ ] Digital marketing and SEO are included
- [ ] Virtual assistance is included
- [ ] Ads campaign service is included
- [ ] Portfolio system exists
- [ ] International portfolio structure exists
- [ ] Technology ecosystem section exists
- [ ] Partner claims are legally safe
- [ ] Global locations structure exists
- [ ] Fake addresses are not used
- [ ] USD is the only pricing currency
- [ ] Contact form works
- [ ] Mobile design works
- [ ] SEO metadata exists
- [ ] Sitemap exists
- [ ] Footer is modern
- [ ] No TypeScript errors
- [ ] No build errors
- [ ] No broken routes
- [ ] No obvious accessibility issues
- [ ] No unnecessary duplicated components

---

# 55. FINAL CREATIVE DIRECTION

The website should feel like:

**AI Company + Enterprise Software Company + Cloud Technology Partner + Digital Transformation Company**

with a strong modern dark identity.

The visual experience should create this reaction:

> "This is a serious international technology company."

The most important brand idea throughout the site:

## **RankVibez — Build Smarter. Automate Faster. Grow with AI.**

