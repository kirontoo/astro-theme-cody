// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

export const siteConfig: Config = {
  title: "Astro Theme Cody",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Amy Dang",
    description: "your bio description"
  }
}

export const NAV_LINKS: Array<{title: string, path: string}> = [
  {
    title: "Home", 
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
