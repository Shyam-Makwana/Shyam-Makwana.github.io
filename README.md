# shyammakwana.com

My personal portfolio, built with [Astro](https://astro.build). It is a static site with no framework runtime.

## Run it locally

Needs Node 22 or newer (see `.nvmrc`).

```sh
npm install
npm run dev
```

The site opens at http://localhost:4321.

## Build

```sh
npm run build
```

The finished site is written to `dist/`.

## Where things live

- `src/data/site.ts`: all the content (profile, roles, projects, skills, education)
- `src/components/`: one file per page section
- `src/layouts/Base.astro`: page shell, colours and the light and dark theme
- `public/docs/`: resume and certificates
