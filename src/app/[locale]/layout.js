import { I18nProvider } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import '../globals.css';

const locales = ['en', 'es', 'pt'];

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const metadata = {
    title: 'FestiRoute - Tu copiloto inteligente para festivales',
    description: 'Descubre una nueva forma de vivir la música electrónica con rutas personalizadas, recomendaciones en tiempo real y todo lo que necesitas en un solo lugar.',
    keywords: 'festivales, música electrónica, rutas, IA, Dazzy, planificación, eventos, conciertos, festival guide',

    // Icons and Favicons
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },

    // Manifest
    manifest: '/site.webmanifest',

    // Theme Color
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#0a0e27' },
        { media: '(prefers-color-scheme: light)', color: '#00ff88' },
    ],

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['es_ES', 'pt_BR'],
        url: 'https://festiroute.com',
        siteName: 'FestiRoute',
        title: 'FestiRoute - Tu copiloto inteligente para festivales',
        description: 'Descubre una nueva forma de vivir la música electrónica con rutas personalizadas, recomendaciones en tiempo real y todo lo que necesitas en un solo lugar.',
        images: [
            {
                url: '/favicon-512x512.png',
                width: 512,
                height: 512,
                alt: 'FestiRoute Logo',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'FestiRoute - Tu copiloto inteligente para festivales',
        description: 'Descubre una nueva forma de vivir la música electrónica con rutas personalizadas, recomendaciones en tiempo real.',
        images: ['/favicon-512x512.png'],
        creator: '@festiroute',
        site: '@festiroute',
    },

    // Additional SEO
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Verification (add your verification codes when available)
    // verification: {
    //     google: 'your-google-verification-code',
    //     yandex: 'your-yandex-verification-code',
    // },
};

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    return (
        <html lang={locale} className="dark">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <I18nProvider locale={locale}>
                    {children}
                </I18nProvider>
                <Script
                    defer
                    src='https://static.cloudflareinsights.com/beacon.min.js'
                    data-cf-beacon='{"token": "247f4d1930d542d3b82ab2f814deeacd"}'
                />
            </body>
        </html>
    );
}
