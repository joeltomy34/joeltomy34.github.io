# JOEL — THE SERIES

A streaming-style portfolio for **Joel Tomy**: analytics and AI builder, McGill MMA candidate in Montreal.
Every section is an episode, every project is an Original, and the home page builds itself in front of
the visitor with a swarm of named cursors before handing over to the real page.

Based on [Sushmita Dasari's Portfolio Series](https://github.com/Sushmitadasari/Portfolio_series).
The build animation is [swarm-page-builder](https://github.com/TejasLamba2006/swarm-page-builder)
(itself based on Joel Califa's Swarm and DhvanilPatel/swarm-cursors).
Not affiliated with Netflix or any streaming service.

## Run it on your Mac

Needs **Node.js 18+** (install from nodejs.org).

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Put it live on joeltomy34.github.io

1. Replace the contents of your `joeltomy34.github.io` repository with this folder and push to `main`.
2. On GitHub, open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push.

## Changing the content

**Everything lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| Jobs | `experience` |
| Projects (Originals) | `projects` |
| Awards and certificates | `achievements`, `certifications` |
| Skills | `skillCategories`, `skillEvidence` |
| My Journey seasons and episodes | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro slides | `introSlides` |

**Resume PDF:** put it at `public/assets/Joel_Tomy_Resume.pdf`, then set `resumePdf` in `profile`.
Until then the site shows the designed resume page and hides the download buttons.

**Photo:** replace `pic1.jpeg` (photo) and `pic.png` (same photo with the background removed), then run
`npm run images`.

## The swarm build

- Runs once per browser session, after the visitor picks a profile. Clear the site's session storage to see it again,
  or use **Rebuild the page** at the bottom of the site.
- Skipped for visitors who have reduced motion turned on.
- `BUILD_SCREENS` in `src/hooks/swarm.ts` sets how much of the page is built (default: 2 screens). More screens means a longer build.
- Cursor names and colours are the `CURSORS` list in the same file.
