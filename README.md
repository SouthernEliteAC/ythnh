# Southern Elite A/C & Appliances LLC — GitHub-Ready

This folder is 100% ready for GitHub + Netlify.

## Upload (no terminal needed)
1. Go to your repo on GitHub.
2. Click **Add file → Upload files**.
3. Drag **all files and folders from this folder** into the upload area (do not upload the ZIP itself).
4. Confirm you see these items at the root _before_ committing:
   - `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `netlify.toml`
   - `src/` (with `App.jsx`, `main.jsx`, `styles/globals.css`, `assets/SEA_LOGO.png`)
5. Click **Commit changes**.

## Netlify settings
- Build command: `npm run build`
- Publish directory: `dist`

## Formspree
Edit `src/App.jsx` and replace the `<form action="https://formspree.io/f/your_form_id">` with your real endpoint.
