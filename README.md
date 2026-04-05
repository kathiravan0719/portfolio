# Kathiravan D — Portfolio

A sleek, dark-themed developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark theme with cyan accent + subtle glow effects
- 🎞 Smooth Framer Motion animations (staggered reveals, scroll-triggered)
- 📱 Fully responsive (mobile-first)
- 📬 Contact form with EmailJS integration
- 🚀 Ready to deploy on Vercel

---

## 🚀 Getting Started

### 1. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Run development server
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Customization

### Update your info
- **`components/Hero.js`** — Name, role, tagline
- **`components/About.js`** — Bio text, stats
- **`components/Projects.js`** — Add your project links (replace `liveUrl` and `githubUrl`)
- **`components/Contact.js`** — Update email, LinkedIn, GitHub URLs
- **`components/Footer.js`** — Update copyright text

### Resume
Drop your resume PDF as `public/resume.pdf` — the "Download Resume" button links to it automatically.

### EmailJS Setup
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create a service + email template
3. Replace in `components/Contact.js`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

---

## 🌐 Deploy to Vercel

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repo
4. Click **Deploy** — it just works!

---

## 📁 File Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.js       ← Root layout + metadata
│   ├── page.js         ← Main page (assembles all sections)
│   └── globals.css     ← Global styles, fonts, utilities
├── components/
│   ├── Navbar.js       ← Sticky nav with scroll effect
│   ├── Hero.js         ← Hero section with CTA buttons
│   ├── About.js        ← About + code block visual
│   ├── Projects.js     ← Project cards grid
│   ├── Skills.js       ← Skills by category
│   ├── Contact.js      ← Social links + EmailJS form
│   └── Footer.js       ← Footer
├── public/
│   └── resume.pdf      ← Drop your resume here
├── tailwind.config.js
├── next.config.js
└── package.json
\`\`\`

---

## 🎨 Design Choices

| Element | Choice |
|---|---|
| Font (Display) | Syne (bold, geometric) |
| Font (Body) | DM Sans |
| Font (Mono) | JetBrains Mono |
| Background | `#080C14` (deep navy-black) |
| Accent | `#22D3EE` (electric cyan) |
| Secondary accent | `#818CF8` (indigo) |

Built with ❤️ by Kathiravan D
