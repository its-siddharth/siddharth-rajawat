# Siddharth Rajawat — Portfolio

A responsive personal portfolio built from Siddharth’s résumé. Includes four filterable project case studies, experience, education, skills, résumé download, and contact links.

Built with React, TypeScript, Vite, Lucide icons, and locally hosted DM Sans / Instrument Serif fonts. Project illustrations are original SVG concept visuals, rather than screenshots of the projects. No backend, API credentials, or environment variables are required.

## Develop

Requires Node.js 22.12+ or 24+ and npm. This environment was validated with Node.js 24.19.0.

```bash
cd /workspace/siddharth-rajawat
npm ci --cache /workspace/.npm-cache
npm run dev -- --port 5173 --strictPort
```

The cache flag keeps package downloads inside the writable cloud workspace. It can be omitted on your own machine. Development runs on port 5173 and listens on all interfaces for the cloud environment.

## Build and verify

```bash
npm run typecheck
npm run build
npm test
```

The browser tests start a production build and preview server automatically, then check desktop and mobile navigation, project filtering, case studies, focus handling, and résumé download. The configuration uses `/usr/bin/chromium` when available; otherwise run `npx playwright install chromium` first. You can also set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an installed Chromium binary.

To inspect the production build manually:

```bash
npm run preview -- --port 4173 --strictPort
```

Generated files are written to `dist/`. The build can be hosted on a static hosting service. Relative asset paths support hosting at a subdirectory. Publishing the cloud environment is separate from deploying the public website. The GitHub Actions workflow described below publishes the website.

## Personalize

- `src/content.ts`: résumé-based profile, projects, experience, education, and skills.
- `src/App.tsx`: sections, navigation, project dialogs, and contact interactions.
- `src/Visuals.tsx`: bespoke SVG artwork.
- `src/styles.css`: layout, colors, typography, and responsive behavior.
- `public/Siddharth-Rajawat-Resume.pdf`: downloadable résumé.
- `index.html`: page title, description, and social metadata.

Contact actions use the email address, LinkedIn URL, and GitHub profile provided for this portfolio. The email button opens the visitor’s email application; the adjacent copy button copies the address with a visible result message.

## GitHub Pages deployment

The `.github/workflows/deploy.yml` workflow builds and publishes the portfolio on pushes to `main`, or when started manually from the repository’s Actions tab.

GitHub Pages must use **GitHub Actions** as its build source under **Settings → Pages → Build and deployment**. The workflow uses GitHub’s built-in token and does not require a personal access token or hosting secret.

The expected address after a successful deployment is `https://its-siddharth.github.io/siddharth-rajawat/`. Verify the deployment workflow succeeds before treating this URL as live.
