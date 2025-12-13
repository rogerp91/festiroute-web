const baseUrl = 'https://festiroute.com';
const locales = ['en', 'es', 'pt'];

export const dynamic = 'force-static';

export default function sitemap() {
    const routes = ['', '/terms', '/privacy'];

    // Generate entries for all locales and routes
    const entries = routes.flatMap(route =>
        locales.map(locale => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
        }))
    );

    // Add root URL (redirects usually)
    entries.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    });

    return entries;
}
