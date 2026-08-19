# HelgaHome&Style

A single-page showcase website for **HelgaHome&Style** — artisanal, cozy knitted home products.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for entrance animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/              # Next.js App Router (layout, page, global styles)
├── components/       # React components (Hero, Categories, Contact, etc.)
├── images/           # Product images (served via public/images symlink)
├── lib/              # Shared data (category definitions)
└── public/images/    # Junction → ../images for static serving
```

## Images

Place product images in the `./images/` folder at the project root:

| Prefix    | Category       |
|-----------|----------------|
| `toy_*`   | Knitted Toys   |
| `bag_*`   | Bags           |
| `set_*`   | Serving Sets   |
| `basket_*`| Baskets        |

Supported extensions: `.jpg` or `.jpeg` (configured in `lib/categories.ts`).

## Build

```bash
npm run build
npm start
```
