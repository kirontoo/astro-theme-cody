import { DEFAULT_LANG, SUPPORTED_LANGUAGES } from "src/consts";
import nav from '@/i18n/nav';

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export function getSupportedLanguages(): string[] {
    return Object.keys(SUPPORTED_LANGUAGES);
}

export function isValidLanguageCode(lang: string): boolean {
    return Object.hasOwn(SUPPORTED_LANGUAGES, lang);
}

export function getLangFromUrl(url: URL) {
    const [, lang,] = url.pathname.split('/');
    if (lang in SUPPORTED_LANGUAGES) {
        return lang as SupportedLanguage;
    }
    return DEFAULT_LANG;
}

export function getLocalizedUrl(url: URL, locale: SupportedLanguage): string {
    const [, , ...slug] = url.pathname.split('/');
    if (isValidLanguageCode(locale)) {
        return `/${locale}/${slug.join("/")}`
    }
    return `/${DEFAULT_LANG}/${slug.join("/")}`
}

export function useTranslations(lang: keyof typeof nav) {
    return function t(key: keyof typeof nav[SupportedLanguage]) {
        return nav[lang][key] || nav[DEFAULT_LANG][key];
    }
}