This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the pages by modifying `pages/*.tsx`. Your browser auto-updates as you edit the files.

## Development

**Page filenames must be lowercase.** In the past we experienced discrepancies
with case sensitivity between S3 and our app's routing, so we configured S3 to
invoke our custom 404 page, and that page to rewrite all URLs to lowercase.

New pages may need to be added to the `PAGES_TO_ALWAYS_SHRINK_NAVBAR` array for
proper formatting.

The use of Bootstrap for CSS in this project is deprecated. (Tailwind for CSS might be cool.)

### Components

Documentation of the various components available for use can be found [here](README_components.md).

## Tests

Run tests with `pnpm run test`. Debug tests using the VS Code debug tab which
makes use of `launch.json`.

## Deployment

A GitHub Action automatically deploys the website to http://righttorescue.com
after pushing to the main branch. Next.js generates static files for this
website, and these are pushed to AWS S3.

## Web development tips

### Image aspect ratios

To make images look consistent site, make sure their aspect ratios are consistent. Here is an example of a tool that
lets you change the aspect ratio of an image:

https://imagy.app/image-aspect-ratio-changer/

### Embedding YouTube videos

Our `<Header>` component accepts a `video` attribute that requires a YouTube embed URL. To obtain such a URL,
find the "Share" button on a YouTube video, choose the "Embed" option and look in the embed code for the value of the
`iframe`'s `src` attribute.
