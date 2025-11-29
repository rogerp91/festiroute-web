'use client';
import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const t = useTranslations();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const steps = [
        {
            icon: 'map',
            title: t('how_it_works.step1_title'),
            description: t('how_it_works.step1_desc')
        },
        {
            icon: 'auto_awesome',
            title: t('how_it_works.step2_title'),
            description: t('how_it_works.step2_desc')
        },
        {
            icon: 'music_note',
            title: t('how_it_works.step3_title'),
            description: t('how_it_works.step3_desc')
        }
    ];

    return (
        <section className="py-20" id="como-funciona">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-4xl font-bold leading-tight tracking-tight text-light md:text-5xl"
            >
                {t('how_it_works.title')}
            </motion.h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-card flex flex-1 flex-col gap-5 rounded-xl p-8 hover:border-primary/30 transition-all"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-medium-dark">
                            <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold leading-tight text-light">{step.title}</h3>
                            <p className="text-base font-medium leading-normal text-secondary-text">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default HowItWorks;
