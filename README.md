# Pixel Perfect Joy
Dashboard Summary
Live Demo : https://pixelperfextjoy-satyam-guptas-projects-3bdb6075.vercel.app

Overview: A polished, data-driven control center that surfaces the most important metrics at a glance.
KPIs: KPICards present real-time, actionable metrics for revenue, user engagement, and growth.
Visual Analytics: Multi-dimensional charts (BubbleChart, PlatformValueChart, RevenueCard) reveal trends, outliers, and correlations.
Platform Insights: PlatformDistribution and PlatformTable break down performance by channel for fast allocation decisions.
Sales Intelligence: SalesDynamic and SalesLeaderboard highlight momentum and top-performing segments for revenue optimization.
UX & Delivery: Responsive, accessible UI built with React + TypeScript and shadcn-ui primitives for rapid, production-ready decision-making.

Lightweight React + TypeScript starter built with Vite, Tailwind CSS, and shadcn-ui components.

**Quick start**

- **Install dependencies:**

```bash
npm install
```

- **Run development server:**

```bash
npm run dev
```

- **Build for production:**

```bash
npm run build
```

**What this repo contains**

- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn-ui (Radix + Tailwind)

**Local development**

- Start the dev server and open http://localhost:5173 (or the URL printed by Vite):

```bash
npm run dev
```

**Build & Optimization**

- Production build:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

- Optimization tips:
	- Enable Vite's build optimizations (default) and avoid bundling large unused libraries.
	- Use dynamic imports for rarely used routes/components.
	- Keep dependencies up to date and audit bundle size with `vite build --report` or `esbuild` plugins.

**Environment variables**

- Local env files: create `.env` (loaded in all modes), `.env.development`, `.env.production`.
- Prefix variables you need in client-side code with `VITE_` (example: `VITE_API_URL`).
- Example `.env`:

```env
VITE_API_URL=https://api.example.com
```

**Platform-specific environment variable notes**

- Vercel: set env vars in Project > Settings > Environment Variables.
- Netlify: set env vars in Site settings > Build & deploy > Environment.
- GitHub Pages: use a build pipeline (GitHub Actions) and set Secrets for the action.

**Deployment Options**

**Vercel**

- Recommended for Vite apps: zero-configuration deployments with automatic builds.
- Steps:
	1. Connect your Git repo to Vercel.
	2. Set Framework Preset to `Vite` (or leave autodetect).
	3. Build command: `npm run build`
	4. Output directory: `dist`
	5. Add any environment variables in Project Settings.

**Netlify**

- Supports Vite out of the box.
- Steps:
	1. Connect your Git repo to Netlify.
	2. Build command: `npm run build`
	3. Publish directory: `dist`
	4. Configure environment variables in Site settings > Build & deploy > Environment.

**GitHub Pages**

- For GitHub Pages, you should build and deploy static `dist` output. Recommended approach is using GitHub Actions to build and push to `gh-pages`.
- Minimal GitHub Actions workflow (create `.github/workflows/gh-pages.yml`):

```yaml
name: Deploy to GitHub Pages

on:
	push:
		branches: [ main ]

jobs:
	build-and-deploy:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- name: Setup Node
				uses: actions/setup-node@v4
				with:
					node-version: '18'
			- run: npm ci
			- run: npm run build
			- name: Deploy
				uses: peaceiris/actions-gh-pages@v3
				with:
					github_token: ${{ secrets.GITHUB_TOKEN }}
					publish_dir: ./dist
```

**Custom domain setup (common steps)**

- After deploying, configure your DNS provider to point to the platform:
	- Vercel: add your domain in Project > Domains; follow the A/CNAME instructions.
	- Netlify: add domain in Site settings > Domain management; follow the DNS records.
	- GitHub Pages: create `CNAME` file at the root of `dist` with your domain and add DNS records (A or CNAME) per GitHub instructions.

**Build commands summary**

- Development: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run preview`

**Notes**

- If you see any leftover platform-specific tooling or references, run a quick search for related package names and remove them.

**Next steps**

- Run `npm install` to refresh `node_modules` and `package-lock.json` after dependency changes.
- Optionally run a bundle analyzer and deploy to your preferred platform.

If you want, I can also add a GitHub Actions workflow for Vercel/Netlify or create a `gh-pages` deploy action — tell me which one to add.
