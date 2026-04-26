# Oriol Carbo Portfolio

Personal portfolio for Oriol Carbo, built with React, TypeScript, Vite, and Tailwind CSS.

The site presents frontend and mobile development experience, selected work, social links, and a public resume PDF.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Hero.tsx
    Footer.tsx
    ui/
  sections/
    About.tsx
    Experience.tsx
    Projects.tsx
  App.tsx
  index.css

public/
  images/projects/
  resume.pdf
```

## Content

- Resume PDF: `public/resume.pdf`
- Project thumbnails: `public/images/projects/`
- Main copy: `src/sections/About.tsx`
- Experience data: `src/sections/Experience.tsx`
- Selected work data: `src/sections/Projects.tsx`
- Social links: `src/components/Hero.tsx`

## Credits

Original design by [Brittany Chiang](https://brittanychiang.com/); adapted here with credit.
