# Astro Starter Kit: Blog

Astro Cody is a simple theme I built 

## Table of Contents
1. [Key Features](#key-features)
2. [Demo](#demo)
3. [Quick Start](#quick-start)
4. [Preview](#preview)
5. [Commands](#commands)
6. [Configure](#configure)
7. [Deploy](#deploy)
8. [Extra Functionality](#extra-funtionality)

## Key Features:
- Astro v4 Fast 🚀
- TailwindCSS Utility classes
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- Dark / Light mode, using Tailwind and CSS variables
- Pinned posts and projects
- [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- Pagination
- [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Astro Icon](https://github.com/natemoo-re/astro-icon) svg icon component

## Demo
Check out the demo [here]().

## Quick Start
[Create a new repo](https://github.com/new?template_name=astro-theme-cody&template_owner=kirontoo) from this template.

```
# npm 7+
npm create astro@latest -- --template kirontoo/astro-theme-cody

# pnpm
pnpm dlx create-astro --template kirontoo/astro-theme-cody
```

## Preview
![astro-theme-cody-light-theme](https://github.com/kirontoo/astro-theme-cody/assets/28286622/17b31f0d-cd76-47e4-90ed-99366c903856)

![astro-theme-cody-dark-theme](https://github.com/kirontoo/astro-theme-cody/assets/28286622/f4520407-8696-4469-b73d-b06209feb4ca)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |


## Configure

### Adding Posts and Projects
This theme utilises [ Content Collections ](https://docs.astro.build/en/guides/content-collections/) 
to organise Markdown and/or MDX files, as well as type-checking frontmatter 
with a schema -> `src/content/config.ts`.

#### Blog
You can find examples of blog posts in `src/content/blog`.

#### Blog post frontmatter
| Property (* = required) | Description |
|:-----------------------| :---------- |
| title * | Title of your post. Limited to a maximum of 150 characters  |
| description * | Short description of your post, which will also be used for SEO. Has a min length of 20 characters and max of 250 characters. |
| pubDate * | Published date |
| updateDate | Optional date representing when the post has been updated. Note that this date will be used instead of the published date to order posts when available.|
| heroImage | Optional cover image for you post. Include both a `src` and a `alt` property. Check `src/content/blog/first-post.md` for an example.|
| ogImage | Optional image used for SEO. |
| tags | Use optional tags to organize your posts into categories or topics. All tags will be shown in `yourdomain.com/tags`. |
| draft | Optional boolean. Removes posts from being published.|
| order | Optional number value from 1 - 5 to pin certain posts to the top. Limited to only 5 pinned posts|


#### Projects
All project content should be placed within `src/pages/projects`.

##### Project frontmatter

| Property (* = required) | Description |
|:-----------------------| :----------|
| title * | Title of your project. Limited to a maximum of 150 characters  |
| description * | Short description of your project, which will also be used for SEO. Has a min length of 20 characters and max of 250 characters. |
| pubDate * | Published date |
| heroImage | Optional cover image for you project. Include both a `src` and a `alt` property. Check `src/pages/projects/project-1.md` for an example.|
| ogImage | Optional image used for SEO. |
| stack * | A list of technologies your project used which will be rendered as icons. This theme uses the SVG Logos librar, you can use [icones.js.org](https://icones.js.org/collection/vscode-icons) to find the icons you need.|
| platform | Link to website or demo |
| website | Link to website or demo |
| github | Your github repo link |
| draft | Optional boolean. Removes projects from being published.|
| order | Optional number value from 1 - 5 to pin certain projects to the top. Limited to only 5 pinned posts|

## Deploy
Astro provides great documentation for deploying your Astro websites on various platforms.
You can find it [here](https://docs.astro.build/en/guides/deploy/).

## Extra Funtionality
Check out [Astro Recipes](https://docs.astro.build/en/recipes/) to add other functionality like a RSS feed.



## Credit

This theme is based off of the theme [Astro Cactus](https://astro-theme-cactus.netlify.app) and [Hugo Risotto](https://risotto.joeroe.io).
