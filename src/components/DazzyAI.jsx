'use client';
import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';

const DazzyAI = () => {
    const t = useTranslations();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    const examples = [
        {
            icon: 'music_note',
            title: t('dazzy.example1_title'),
            description: t('dazzy.example1_desc')
        },
        {
            icon: 'checkroom',
            title: t('dazzy.example2_title'),
            description: t('dazzy.example2_desc')
        },
        {
            icon: 'schedule',
            title: t('dazzy.example3_title'),
            description: t('dazzy.example3_desc')
        },
        {
            icon: 'rainy',
            title: t('dazzy.example4_title'),
            description: t('dazzy.example4_desc')
        }
    ];

    return (
        <section className="relative py-20" id="dazzy-ia">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse"
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 text-center"
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
                </div>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-light md:text-5xl">
                    {t('dazzy.title_prefix')} <span className="gradient-text">{t('dazzy.title_highlight')}</span>
                </h2>
                <p className="max-w-3xl text-lg font-medium text-secondary-text">
                    {t('dazzy.subtitle')}
                </p>
            </motion.div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
                {examples.map((example, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="rounded-xl p-5 transition-all hover:scale-105"
                        style={{ backgroundColor: '#111111' }}
                    >
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-2xl mt-0.5">{example.icon}</span>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-primary mb-2">{example.title}</h3>
                                <p className="text-sm font-medium text-secondary-text">{example.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center text-sm text-secondary-text/70"
            >
                {t('dazzy.footer_text')}
            </motion.p>
        </section>
    );
};

export default DazzyAI;
