'use client';

import { useTranslations, useLocale } from '@/lib/i18n';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[800px] glass-card rounded-2xl p-8 md:p-12 lg:p-16 relative z-10 border border-primary/10"
            >
                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-light mb-4 tracking-tight">
                        {t('privacy_page.title').split(' ').slice(0, -1).join(' ')} <span className="text-primary neon-glow">{t('privacy_page.title').split(' ').slice(-1)}</span>
                    </h1>
                    <p className="text-sm md:text-base text-secondary-text uppercase tracking-widest font-medium">
                        {t('privacy_page.subtitle')}
                    </p>
                </header>

                {/* Content */}
                <div className="space-y-10 text-lg leading-relaxed font-light text-secondary-text">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <section key={num}>
                            <h2 className="text-xl font-semibold text-primary mb-3">
                                {t(`privacy_page.sections.${num}.title`)}
                            </h2>
                            <p className="mb-2">
                                {t(`privacy_page.sections.${num}.content`)}
                            </p>
                            {/* Render email link if exists (for section 5) */}
                            {num === 5 && (
                                <a href="mailto:hello@festiRoute.app" className="text-light hover:text-primary transition-colors duration-300 border-b border-primary/30 pb-0.5 inline-block mt-1">
                                    hello@festiRoute.app
                                </a>
                            )}
                        </section>
                    ))}
                </div>

                {/* Decorative Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent my-12"></div>

                {/* Back Button */}
                <div className="text-center">
                    <Link href={`/${locale}`} className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-all duration-300 group">
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> {t('privacy_page.back_home')}
                    </Link>
                </div>
            </motion.main>
        </div>
    );
}
