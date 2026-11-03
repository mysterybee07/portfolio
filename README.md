# birajpudasaini.com.np

My personal portfolio, built with React 18, Vite and Tailwind CSS.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Editing content

All text (experience, projects, skills, stats) lives in [`src/data.js`](src/data.js).
To update the downloadable CV, replace `public/Biraj_Pudasaini_CV.pdf`.

## Contact form

The site is static, so the form sends messages through [Web3Forms](https://web3forms.com).
Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY`. Without a key, the form opens the
visitor's email app with the message filled in.

## Deploy

Hosted on GitHub Pages: `npm run deploy` builds and publishes `dist/` (the custom domain is kept through `public/CNAME`).
