import { I18nProvider } from '@/lib/i18n';
import { Urbanist } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import '../globals.css';
import es from '../../messages/es.json';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';

const messages = { es, en, pt };

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-urbanist',
    display: 'swap',
});

const locales = ['en', 'es', 'pt'];

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    // Default to 'es' if something goes wrong, though generateStaticParams handles valid locales
    const currentLocale = locales.includes(locale) ? locale : 'es';
    // Fallback to 'es' messages if locale messages are missing metadata (safety check)
    const t = messages[currentLocale]?.metadata || messages['es'].metadata;

    return {
        metadataBase: new URL('https://festiroute.com'),
        title: t.title,
        description: t.description,
        keywords: t.keywords ? t.keywords.split(', ') : [],

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

        // Open Graph
        openGraph: {
            type: 'website',
            locale: currentLocale === 'en' ? 'en_US' : currentLocale === 'pt' ? 'pt_BR' : 'es_ES',
            alternateLocale: locales.filter(l => l !== currentLocale).map(l => l === 'en' ? 'en_US' : l === 'pt' ? 'pt_BR' : 'es_ES'),
            url: `https://festiroute.com/${currentLocale}`,
            siteName: 'FestiRoute',
            title: t.title,
            description: t.description,
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
            title: t.title,
            description: t.description,
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
        alternates: {
            canonical: `/${currentLocale}`,
            languages: {
                'en': '/en',
                'es': '/es',
                'pt': '/pt',
            },
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    // Safety access just in case
    const t = messages[locale]?.metadata || messages['es'].metadata;

    return (
        <html lang={locale} className="dark">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                    rel="stylesheet"
                />
            </head>
            <body className={`${urbanist.variable} font-sans antialiased`}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TD4H6T5B"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TD4H6T5B');
                    `}
                </Script>
                <I18nProvider locale={locale}>
                    {children}
                </I18nProvider>
                <Script
                    defer
                    src='https://static.cloudflareinsights.com/beacon.min.js'
                    data-cf-beacon='{"token": "247f4d1930d542d3b82ab2f814deeacd"}'
                />
                <Script id="schema-org" type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "FestiRoute",
                            "applicationCategory": "TravelApplication",
                            "operatingSystem": "Web, iOS, Android",
                            "areaServed": ["BE", "NL", "GB", "ES", "PT", "US", "LATAM"],
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "description": "${t.description}",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "ratingCount": "100"
                            }
                        }
                    `}
                </Script>
            </body>
        </html>
    );
}
