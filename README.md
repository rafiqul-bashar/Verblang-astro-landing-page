<h1 align="center">
  Astro  landing page template 🚀
</h1>

A simple landing page theme built with AstroJS and TailwindCSS, specifically designed for Notion creators. It's easy to customize, allowing you to create a minimalistic site that fits your style using its versatile components.

<hr>

## Key Features:

-   Minimal styling (make it your own!)
-   Accessible, semantic HTML markup
-   Blazingly Fast
-   Responsive & SEO-friendly with canonical URLs, OpenGraph data and Meta tags.
-   Sitemap support

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Update Site Metadata

```js
env: {
  siteTitle: 'Your Company',
  siteDescription: 'Your company description.',
  siteKeywords: 'your company keywords',
  siteUrl: 'your site url',
  siteImagePreviewUrl: '/images/preview.jpeg',
  twitterHandle: '@your_handle'
}
```

## Update Colors

You can update the colors in tailwind.config.js file.

## Update Favicon

Update the manifest.json file and the icons under the public/images/icons folder.
