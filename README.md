# coltonrandall.com

My personal site: [coltonrandall.com](https://coltonrandall.com)

A single static page built for recruiters and hiring managers. It covers my experience, selected projects and contact details, and includes a small working demo of my [SMS Routing Service](https://github.com/ColtonRandall/sms-routing-service) that applies the same carrier routing and opt-out rules as the real code.

<img src="./screenshots/desktop-light.png" width="420" alt="Light mode"> <img src="./screenshots/desktop-dark.png" width="420" alt="Dark mode">

## Stack

- Static HTML and CSS with a small amount of TypeScript, and no framework
- [Vite](https://vite.dev) for local dev and the production build, with `tsc` type-checking in strict mode
- Light and dark themes that follow the system setting, with a manual toggle
- Open Graph image, structured data and a sitemap so link previews and search results look right

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy        # builds and publishes dist/ to GitHub Pages (gh-pages branch)
npm run deploy:aws    # optional: uploads dist/ to the S3 bucket defined in infra/
```

## Files

| Path | What it is |
| --- | --- |
| `index.html` | Page content and structure |
| `src/styles.css` | All styles, including the light and dark themes |
| `src/sms-routing.ts` | Routing rules for the hero demo, mirroring the Java service |
| `src/main.ts` | Wires up the demo, theme toggle and copy-email button |
| `public/docs/` | The CV linked from the Résumé button |
| `public/images/og.png` | Link preview image for LinkedIn, Slack and similar |
| `public/404.html` | Sends old or broken links back to the home page |
| `infra/` | Terraform for the optional S3 deployment |
