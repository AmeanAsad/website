# website
My personal website built with Typescript + Next.js + Chakra UI

[ameanasad.xyz](https://www.ameanasad.xyz)

## Tech Stack:
- Next.js as a development framework
- Typescript
- Chakra UI as a component library
- Backblaze B2 as cloud storage to serve media.

## Deployment:
- Use Vercel to perform deployment checks.
- Main deployment to the public is on Netlify.

## Overview

- `website/*` - Main Next.js directory.
- `website/pages*` - The different page layouts for my website (home, about, experiences, etc. ).
- `website/public/*` - Contains the website logo sized for different layouts and files for crawling permissions.
- `website/styles/*` - Global theme that defines fonts, colors, and custom styling.
- `website/pages/projects/*` - Static pre-rendered page setup for MDX files.
- `website/components/markdownfiles*` - My MDX files describing my projects.
- `website/utils/*` - Helper functions to setup my MDX static pages.


## Running Locally

```bash
$ git clone git@github.com:AmeanAsad/website.git
$ cd website/website
$ npm i
$ npm run dev
```

## Cloning / Forking

Please remove all of my personal information (links, blog posts, images, etc.).
