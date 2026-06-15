# FlegarTech — Promo Pack

**Tagline:** Web apps & MVPs, built to actually ship.

A developer studio portfolio — real projects, clean engineering, honest labels.

Built by FlegarTech.

## Assets in this folder

| File | Size |
| ---- | ---- |
| `01-instagram-square.png` | 1080×1080 |
| `02-instagram-story.png` | 1080×1920 |
| `03-instagram-reel-cover.png` | 1080×1920 |
| `04-facebook-post.png` | 1200×630 |
| `05-x-post.png` | 1600×900 |
| `06-linkedin-post.png` | 1200×1200 |
| `07-linkedin-banner.png` | 1584×396 |
| `08-github-social-preview.png` | 1280×640 |
| `09-portfolio-hero.png` | 1600×900 |
| `10-app-showcase.png` | 1920×1080 |

Source screenshots used to build these images are in [`source-screenshots/`](./source-screenshots/).

## Recommended use per platform

| Asset | Where to post |
| ----- | ------------- |
| `01-instagram-square.png` | Instagram feed, Facebook feed |
| `02-instagram-story.png` | Instagram / Facebook Stories |
| `03-instagram-reel-cover.png` | Instagram Reel / TikTok cover |
| `04-facebook-post.png` | Facebook link card, Open Graph image |
| `05-x-post.png` | X / Twitter post, link preview |
| `06-linkedin-post.png` | LinkedIn feed post |
| `07-linkedin-banner.png` | LinkedIn personal / company banner |
| `08-github-social-preview.png` | GitHub repo → Settings → Social preview |
| `09-portfolio-hero.png` | Portfolio / case-study hero, blog header |
| `10-app-showcase.png` | Product Hunt, press kit, README hero, slides |

## Suggested captions

**Instagram**
> New portfolio is live. FlegarTech — a developer studio shipping real web apps & MVPs, not slideware. Built with Next.js 15, TypeScript & Tailwind. 🟢

**LinkedIn**
> Launching the FlegarTech studio site — a portfolio of shipped web apps and MVPs with clean engineering and honest labels. Next.js 15, TypeScript, Tailwind, working contact form, SEO and analytics wired in.

**X / Twitter**
> FlegarTech is live — a dev studio portfolio of real, shipped projects. Next.js 15 · TS · Tailwind.

**Facebook**
> FlegarTech is live — a developer studio that ships real web apps and MVPs. Take a look at the projects.

**GitHub (repo description / social preview alt)**
> FlegarTech studio site — Next.js 15 + TypeScript + Tailwind portfolio of shipped projects.

## Source screenshots

- `flegartech-site-main/promo/source-screenshots/01-shot-01-desktop.png` (from `audit/screenshots/final-ready/flegartech-site/01-desktop.png`)
- `flegartech-site-main/promo/source-screenshots/02-shot-03-projects.png` (from `audit/screenshots/final-ready/flegartech-site/03-projects.png`)
- `flegartech-site-main/promo/source-screenshots/90-mobile-02-mobile.png` (from `audit/screenshots/final-ready/flegartech-site/02-mobile.png`)

*All visuals use real product screenshots. No UI was mocked or invented.*

## Promo videos

Silent, real-screenshot motion demos (no audio track — license-safe). Built from the same real
captures as the images, animated with smooth Ken Burns motion + crossfades and a title / CTA card.

| File | Size | Duration | Platform |
| ---- | ---- | -------- | -------- |
| `videos/01-instagram-reel.mp4` | 1080×1920 | 00:00:18.90 | Instagram Reels |
| `videos/02-tiktok.mp4` | 1080×1920 | 00:00:18.90 | TikTok |
| `videos/03-youtube-short.mp4` | 1080×1920 | 00:00:18.90 | YouTube Shorts |
| `videos/04-linkedin-demo.mp4` | 1920×1080 | 00:00:30.00 | LinkedIn (longer demo) |
| `videos/05-x-demo.mp4` | 1600×900 | 00:00:27.40 | X / Twitter |
| `videos/06-facebook-demo.mp4` | 1920×1080 | 00:00:27.40 | Facebook |
| `videos/07-github-readme-demo.mp4` | 1280×720 | 00:00:27.40 | GitHub README embed |
| `videos/08-portfolio-hero.mp4` | 1920×1080 | 00:00:27.40 | Portfolio / case-study hero |

GIF fallbacks in [`videos/gifs/`](./videos/gifs/): `github-readme-demo.gif` (README embeds) and `short-demo.gif` (quick previews / chat).

**Structure:** title card → main UI reveal → 3 feature callouts → mobile / second screen → CTA card (“Built by FlegarTech · Demo-ready product · github.com/flegartech/flegartech-site”).
**Audio:** none (silent by default). Add royalty-free music in an editor if desired.

**Suggested video caption (Reels / TikTok / Shorts):**
> A 20s reel walking through the FlegarTech studio site — live projects, clean engineering, honest labels. Built with Next.js 15. 🟢

To rebuild: `node build-videos.mjs flegartech-site-main` (or `promo/scripts/build-video.sh`).
