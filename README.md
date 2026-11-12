# Aditi Choudhary - Academic & Research Portfolio

Personal academic and research portfolio built with React, TypeScript, Vite, Tailwind CSS and Motion. The site is based on the original illustration-based portfolio implementation and retains its visual language, responsive layout, custom cursor and animation behavior.

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

The EmailJS contact form requires the following environment variables in `.env`:

```env
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

Do not commit `.env` or expose private credentials.

## Useful commands

- `npm run dev` — local development server
- `npm run type-check` — TypeScript validation
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run deploy` — deploy `dist` to GitHub Pages

## Content organization

- `src/data/profile.ts` — identity, contact details, social links and education
- `src/constants.ts` — navigation and project content
- `src/components/Home/Skills/Skills.tsx` — displayed skills
- `src/components/Home/Research/Research.tsx` — research experience
- `src/components/Home/Publications/Publications.tsx` — publications and academic highlights

## Deployment

The Vite base path is currently configured as `/portfolio/` for GitHub Pages. Update `base` in `vite.config.ts` if the repository name or hosting path changes.
