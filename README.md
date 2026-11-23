# website
My personal website built with Typescript + Next.js and plain HTML/CSS

[ameanasad.xyz](https://www.ameanasad.xyz)
[ameanasad.tech](https://www.ameanasad.tech)

## Tech Stack:
- Next.js as a development framework
- Typescript
- Plain CSS (`website/styles/globals.css`), no component library
- Markdown blog posts rendered to HTML at build time

## Deployment:
- Use Vercel to perform deployment checks.
- Main deployment to the public is on Netlify.

## Overview

- `website/*` - Main Next.js directory.
- `website/pages/*` - The different page layouts for my website (home, about, experiences, etc. ).
- `website/public/*` - Contains the website logo sized for different layouts and files for crawling permissions.
- `website/styles/*` - The one global stylesheet.
- `website/content/blog/*` - Blog posts in markdown. Add a file here to publish a post (`draft: true` hides it).
- `website/data/*` - The praise quotes that cycle on the homepage.
- `website/utils/*` - Helpers that turn the markdown posts into HTML.


## Running Locally

```bash
$ git clone git@github.com:AmeanAsad/website.git
$ cd website/website
$ npm i
$ npm run dev
```

## Cloning / Forking

Please remove all of my personal information (links, blog posts, images, etc.).
