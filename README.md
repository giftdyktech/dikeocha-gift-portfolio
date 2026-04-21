# Dikeocha Gift — Portfolio

A production-grade, senior-level portfolio built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Dark / Light Mode**
- **Multilingual**: English 🇬🇧 · Igbo 🇳🇬 · French 🇫🇷

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — done!

Vercel auto-detects Next.js. Zero config needed.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # CSS variables (dark/light theme)
│   ├── layout.tsx        # Root layout with fonts + providers
│   └── page.tsx          # Main page (section switcher)
│
├── components/
│   ├── Sidebar.tsx       # Profile card, theme toggle, lang switcher
│   ├── Nav.tsx           # Section navigation
│   ├── About.tsx         # About section
│   ├── Resume.tsx        # Resume with animated skill bars
│   ├── Portfolio.tsx     # Filterable grid + project modal
│   ├── Blog.tsx          # Blog posts
│   └── Contact.tsx       # Contact form
│
├── lib/
│   └── context.tsx       # ThemeContext + LangContext
│
└── translations/
    └── index.ts          # English, Igbo, French translations
```

---

## ✏️ Personalising Your Portfolio

### Update your info
Edit `src/translations/index.ts` — all text is in one place:
- Name, role, bio
- Contact details (email, phone, location, birthday)
- Education & experience
- Projects (title, category, tech stack)
- Blog posts
- Testimonials

### Add your photo
Replace the avatar initials in `src/components/Sidebar.tsx`:
```tsx
// Replace the "DG" initials block with:
<Image src="/avatar.jpg" alt="Dikeocha Gift" fill className="object-cover" />
```
Put your photo at `public/avatar.jpg`

### Add your CV
Put your CV file at `public/cv.pdf` — the Download CV button is already wired up.

### Update social links
In `src/components/Sidebar.tsx`, update the GitHub, LinkedIn, Twitter links.

---

## 🎨 Customising the Theme

All colours are CSS variables in `src/app/globals.css`:

```css
:root {
  --gold: #D4AF37;        /* accent colour */
  --bg: #F0EFE9;          /* light mode background */
  --bg-card: #FFFFFF;     /* light mode card */
}

.dark {
  --bg: #1a1a1a;          /* dark mode background */
  --bg-card: #242424;     /* dark mode card */
}
```

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.0 | Framework + routing |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations & transitions |
| Lucide React | 0.363 | Icons |
| Google Fonts | — | Poppins + Playfair Display |

---

Built by Dikeocha Gift
