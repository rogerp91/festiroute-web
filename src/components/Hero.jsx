'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';
import WaitlistModal from './WaitlistModal';

const Hero = () => {
    const t = useTranslations();
    const heroRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const heroSection = heroRef.current;
        if (!heroSection) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle absolute bg-primary/30 rounded-full pointer-events-none';

            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            const startX = Math.random() * heroSection.offsetWidth;
            const startY = heroSection.offsetHeight;

            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;

            heroSection.appendChild(particle);

            const duration = Math.random() * 3000 + 2000;
            const endY = -100;
            const drift = (Math.random() - 0.5) * 100;

            particle.animate([
                {
                    transform: `translate(0, 0)`,
                    opacity: 0
                },
                {
                    transform: `translate(${drift}px, ${endY - startY}px)`,
                    opacity: 0.6,
                    offset: 0.3
                },
                {
                    transform: `translate(${drift * 2}px, ${endY - startY}px)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        };

        const interval = setInterval(createParticle, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section ref={heroRef} className="hero-section relative flex min-h-[calc(100vh-65px)] flex-col items-center justify-center py-20 text-center overflow-hidden">
                {/* Hero Background with Parallax */}
                <div className="hero-background absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1544383835-bda2bc66a22d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/70 to-transparent"></div>

                {/* Animated Glow Effects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hero-glow absolute top-1/4 left-1/4 z-5 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="hero-glow absolute bottom-1/4 right-1/4 z-5 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"
                ></motion.div>

                <div className="relative z-20 flex flex-col items-center gap-8">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full border border-medium-dark bg-medium-dark/50 px-3 backdrop-blur-sm">
                            <p className="text-xs font-medium leading-normal text-light">{t('hero.new_companion')}</p>
                        </div>
                        <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/50 bg-primary/10 px-3 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                            <p className="text-xs font-medium leading-normal text-primary">{t('hero.powered_by')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <h1 className="text-5xl font-bold leading-tight tracking-[-0.033em] text-light md:text-7xl neon-glow">
                            {t('hero.title_prefix')} <span className="gradient-text">{t('hero.title_highlight')}</span> {t('hero.title_suffix')}
                        </h1>
                        <h2 className="mx-auto max-w-3xl text-base font-medium leading-normal text-secondary-text md:text-lg">
                            {t('hero.subtitle')}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-wide text-dark transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl"
                        >
                            <span className="truncate">{t('hero.waitlist')}</span>
                        </button>
                        <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-medium-dark bg-dark/50 backdrop-blur-sm px-5 text-base font-bold leading-normal tracking-wide text-light transition-all hover:bg-medium-dark hover:border-primary/30">
                            <span className="truncate">{t('hero.how_it_works')}</span>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Modal rendered outside the section to avoid overflow issues */}
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;
