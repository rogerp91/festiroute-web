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
            <section className="relative my-16 mx-4 md:mx-auto max-w-6xl">
                {/* Glow behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>

                <div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

                    {/* Ambient Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[100px] rounded-full point-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 flex flex-col items-center gap-6 py-16 px-6 text-center md:px-12"
                    >
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl drop-shadow-sm max-w-3xl">
                            {t('cta.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">{t('cta.title_highlight')}</span>.
                        </h2>

                        <p className="max-w-2xl text-lg font-medium text-zinc-400">
                            {t('cta.subtitle')}
                        </p>

                        <div className="pt-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative flex h-14 min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 text-base font-bold text-dark transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(242,251,98,0.5)]"
                            >
                                <span className="relative z-10">{t('cta.join_now')}</span>
                                <span className="material-symbols-outlined relative z-10 text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>

                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                            </button>
                        </div>

                        <p className="text-[11px] text-zinc-600 mt-2 font-medium tracking-wide">
                            {t('cta.no_spam')}
                        </p>
                    </motion.div>
                </div>
            </section>
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default CTA;
