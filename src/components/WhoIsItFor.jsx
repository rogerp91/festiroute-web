'use client';
import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';

const WhoIsItFor = () => {
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

    const personas = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGsfKQJ3RxHOGbntjgndQmA26wEByVKwzDHV-wdCPt9U7DoTdfBMyIuvt7OPcZ6n4Wi5jdMVnMQWFrvl3W-Kk4B56CbkLEmvRwBS3XgYbLnAiveaW5Je5JxV2yhD1qzafZRhshaOO6m1zhp3OrOwVXp4bYkCNIKS-qllEOMES163Y5Er6qMp-UVt9liAP0kBcggbkxt87aGgJyf7KTCPPgBYR4ZP0fGYphu8-xJELxds3pqQSQDexaVWEw2xK-jAtUjPUuwWlHLSw',
            alt: 'Seasoned festival-goer',
            title: t('who_is_it_for.persona1_title'),
            description: t('who_is_it_for.persona1_desc')
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVImhGrQ7opTzN3NqIQtRbK4sX3NbgRz6AsVj0Ra-UU6joDhmYiJbhOYLa6DDmWWoyJOeLLG-lYlVArFLPg8rMPodxlS9dtMr_TrbrurN0uxGxOL8l1l8dczGotEOhf0Ec5bdToIVsQnSks-p3YlA9UXzKvFC0RUEJGjG7dM5A1zq6Wx4Vulv9jz_JpFDJL_QiVQg59pn1gfPpF5FYVacppjwKSPcBM_mt66d8jNXZalwbDMnOgrBsfHdPPEAoMs5yeh2_U7sbyfw',
            alt: 'First-timer at a festival',
            title: t('who_is_it_for.persona2_title'),
            description: t('who_is_it_for.persona2_desc')
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCldU-ehAybR8CGvitKt7V-h4fCQqpnjvuUvnzoY6kCXc00Ip29BpNugoZXH8D9ZjokzRk535Tl39xnvyB8YPGYng76vzHhdpeMycPDAVtPvj0bF9n5eXbJd-IUdCLs39Vp2q-8V6-fdGlpKh2qES9QaAD4l79YR25QV0EH0I_tSZZikmg1fRIIiAJAbyNrv2hh9dV7Zehu_xSjPjL1vyAqkQHptK_MYLFjLdSJuMfrFvxHNEbxU7A5IvLeauva_3GoWk6-dlIql7o',
            alt: 'Group organizer at a festival',
            title: t('who_is_it_for.persona3_title'),
            description: t('who_is_it_for.persona3_desc')
        }
    ];

    return (
        <section className="py-20" id="para-quem-e">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-4xl font-bold leading-tight tracking-tight text-light md:text-5xl"
            >
                {t('who_is_it_for.title')}
            </motion.h2>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
            >
                {personas.map((persona, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="flex flex-col items-center gap-4 text-center"
                    >
                        <img
                            alt={persona.alt}
                            className="h-40 w-40 rounded-full object-cover transition-all hover:scale-110 hover:shadow-2xl hover:shadow-primary/30"
                            src={persona.image}
                        />
                        <h3 className="text-xl font-bold text-light">{persona.title}</h3>
                        <p className="text-base font-medium text-secondary-text">{persona.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhoIsItFor;
