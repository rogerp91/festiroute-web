'use client';
import React, { useState } from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';
import WaitlistModal from './WaitlistModal';

const CTA = () => {
    const t = useTranslations();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="my-20 mx-4 md:mx-auto max-w-7xl rounded-2xl border border-primary/20 bg-gradient-to-br from-medium-dark/50 to-medium-dark/30 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center gap-6 p-12 text-center md:p-16"
                >
                    <h2 className="text-4xl font-bold leading-tight tracking-tight text-light md:text-5xl">
                        {t('cta.title_prefix')} <span className="gradient-text">{t('cta.title_highlight')}</span>.
                    </h2>
                    <p className="max-w-2xl text-lg font-medium text-secondary-text">
                        {t('cta.subtitle')}
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn-primary flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-wide text-dark transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-2xl"
                    >
                        <span className="truncate">{t('cta.join_now')}</span>
                    </button>
                    <p className="mt-4 text-[11px] text-secondary-text/80">
                        {t('cta.no_spam')}
                    </p>
                    <p className="mt-1 text-[11px] text-secondary-text/80">
                        {t('cta.made_by')}
                    </p>
                </motion.div>
            </section>
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default CTA;
