// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

import type nav from "./i18n/nav";
import ui from "./i18n/ui";
import type { SupportedLanguage } from "./utils/i18n";

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  },
  settings: {
    paginationSize: number,
  },
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const SUPPORTED_LANGUAGES = {
  'en': 'en',
  'es': 'es'
};

export const DEFAULT_LANG = SUPPORTED_LANGUAGES.en as SupportedLanguage;

export const siteConfig: Config = {
  title: ui[DEFAULT_LANG]["site.title"].text,
  description: ui[DEFAULT_LANG]["site.description"].text,
  lang: DEFAULT_LANG,
  profile: {
    author: "Amy Dang",
    description: ui[DEFAULT_LANG]["profile.description"].text
  },
  settings: {
    paginationSize: 10
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/kirontoo/astro-theme-cody",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "#",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:ndangamy@gmail.com",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

// NOTE: match these entries with keys in `src/i18n/nav.ts`
export const NAV_LINKS: Array<keyof typeof nav[SupportedLanguage]> = [
  "home", "about", "blog", "projects", "archive"
];
