# Portfolio — Vinod Katravath

A fast, animated portfolio built with **React + TypeScript + Vite**, styled in a
clean NeuralCare-inspired theme (cream background, teal→green gradient accents,
glassy cards, scroll animations via Framer Motion).

## ✏️ Edit your content (the only file you usually need)

Open **`src/config.ts`** — everything is there:

- Name, role, headline, tagline
- Email, phone, résumé link
- GitHub / LinkedIn / LeetCode URLs
- Stats band numbers
- Core stack chips
- Featured projects
- Work history
- Services

> In the headline, wrap words in `*asterisks*` to give them the gradient highlight.

### Replace these placeholders before going live
1. `src/config.ts` → real **email**, **phone**, **GitHub**, **LinkedIn**, **LeetCode**.
2. `public/resume.pdf` → drop in your real résumé (keep the filename `resume.pdf`).

## 🧑‍💻 Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## 🏗️ Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## 🚀 Deploy to Vercel

**Option A — via GitHub (recommended):**
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite — click **Deploy**. Done.

**Option B — via CLI (no GitHub needed):**
```bash
npm i -g vercel
vercel            # follow prompts, accept defaults
vercel --prod     # promote to production
```

`vercel.json` is already configured (framework: vite, SPA rewrites).

## 🎨 Theme

Colors live as CSS variables in `src/index.css` (`:root`). Tweak `--grad`,
`--bg`, `--bg-dark` to re-skin the whole site.
