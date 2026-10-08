# Mayank Barmase: Portfolio

React 18 + Vite 5 + Tailwind CSS 3 + Lucide icons. Single page, no router.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Update your details
Everything lives in `src/config/siteConfig.js`: name, intro, about text, skills, projects, education, certificates, and links.

- **Email:** set `links.email` (anything containing `YOUR_` is treated as a placeholder and hidden from mailto links).
- **Resume:** replace `public/resume/Mayank_Barmase_Resume.pdf` with your PDF (same name), or change `links.resume`.
- **Add a project:** copy an object in the `projects` array, edit it, and fill `github` / `demo`. Empty links show a disabled "add link" button. Delete `note` once you've confirmed the details.
- **Add a certificate:** copy an object in `certificates`. Put the image in `public/certificates/` and set `image: '/certificates/name.png'`, plus `issuer`, `date`, `verifyUrl`.

## Contact form
The form validates in the browser but sends nothing until you connect a service:
1. Create a form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Paste it into `links.formEndpoint` in `siteConfig.js`.
Or point `formEndpoint` at your own backend route that accepts a JSON POST with `name, email, subject, message`.

## Deploy
**Vercel:** push to GitHub, import the repo at vercel.com, framework "Vite" (auto-detected), build `npm run build`, output `dist`.
**Netlify:** push to GitHub, "Add new site" → import, build `npm run build`, publish directory `dist`. (Or drag the `dist` folder onto app.netlify.com/drop.)
