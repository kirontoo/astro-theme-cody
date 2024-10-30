/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "en": {
        "site.title": {
            text: "Astro Theme Cody"
        },
        "site.description": {
            text: "A minimalist blog theme built with Astro. A quick and easy starter build for anyone who wants to start their own blog."
        },
        "profile.description": {
            text: "your bio description"
        },
        "blog.lastUpdated": {
            text: "Last updated:"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    },
    "es": {
        "site.title": {
            text: "Astro Theme Cody"
        },
        "site.description": {
            text: "Un tema de blog minimalista creado con Astro. Un tema de inicio rápido y sencillo para cualquiera que quiera crear su propio blog."
        },
        "profile.description": {
            text: "tu descripción biográfica"
        },
        "blog.lastUpdated": {
            text: "Última actualización:"
        },
        "sidebar.tableOfContents": {
            text: "Tabla de contenidos"
        },
        "project.platform": {
            text: "PLATAFORMA"
        },
        "project.stack": {
            text: "PILA"
        },
        "project.website": {
            text: "WEBSITE"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };