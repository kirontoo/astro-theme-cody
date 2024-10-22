/**
 * This configures the navigation bar and footer. Each entry is a nav link with
 * the correct translation and url path.
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */

import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "en": {
        "home": {
            text: "Home",
            slug: ""
        },
        "about": {
            text: "About",
            slug: "about"
        },
        "blog": {
            text: "Blog",
            slug: "blog",
            route: "/blog/pages/1"
        },
        "projects": {
            text: "Projects",
            slug: "projects",
            route: "/projects/pages/1"
        },
        "archive": {
            text: "Archive",
            slug: "archive"
        },
        "tags": {
            text: "Tags",
            slug: "tags"
        },
        "series": {
            text: "Series",
            slug: "series"
        }
    },
    "es": {
        "home": {
            text: "Página Principal",
            slug: ""
        },
        "about": {
            text: "Acerca De",
            slug: "about"
        },
        "blog": {
            text: "Blog",
            slug: "blog",
            route: "/blog/pages/1"
        },
        "projects": {
            text: "Proyectos",
            slug: "projects",
            route: "/projects/pages/1"
        },
        "archive": {
            text: "Archivo",
            slug: "archive"
        },
        "tags": {
            text: "Etiquetas",
            slug: "tags"
        },
        "series": {
            text: "Serie",
            slug: "series"
        }
    }
} as const satisfies TranslationNavEntries;

type TranslationNavEntries = Record<SupportedLanguage, Record<string, NavEntry>>

export type NavEntry = {
    /*
        Provided translation
    */
    text: string,

    /*
        Content collection slug or url path for this page without the language code
    */
    slug: string,

    route?: string
};