'use client';

import { createContext, useContext, ReactNode } from 'react';
import es from '../messages/es.json';
import en from '../messages/en.json';
import pt from '../messages/pt.json';

const messages = { es, en, pt };

const I18nContext = createContext({ locale: 'en', t: (key: string) => key });

export function I18nProvider({ children, locale }: { children: ReactNode; locale: string }) {
    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = messages[locale as keyof typeof messages];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <I18nContext.Provider value={{ locale, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslations() {
    const { t } = useContext(I18nContext);
    return t;
}

export function useLocale() {
    const { locale } = useContext(I18nContext);
    return locale;
}
