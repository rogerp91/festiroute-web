'use client';
import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';

const Features = () => {
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const features = [
        {
            icon: 'route',
            title: t('features.feature1_title'),
            description: t('features.feature1_desc')
        },
        {
            icon: 'artist',
            title: t('features.feature2_title'),
            description: t('features.feature2_desc')
        },
        {
            icon: 'notifications_active',
            title: t('features.feature3_title'),
            description: t('features.feature3_desc')
        },
        {
            icon: 'group',
            title: t('features.feature4_title'),
            description: t('features.feature4_desc')
        }
    ];

    return (
        <section className="py-20" id="funcionalidades">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-4xl font-bold leading-tight tracking-tight text-light md:text-5xl"
            >
                {t('features.title')}
            </motion.h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="glass-card flex flex-col gap-4 rounded-xl p-8 hover:border-primary/30 transition-all"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-medium-dark">
                            <span className="material-symbols-outlined text-primary text-2xl">{feature.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-light">{feature.title}</h3>
                        <p className="text-base font-medium text-secondary-text">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Features;
