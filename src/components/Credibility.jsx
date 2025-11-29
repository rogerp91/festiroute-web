'use client';
import React from 'react';
import { useTranslations } from '@/lib/i18n';
import { motion } from 'framer-motion';

const Credibility = () => {
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

    return (
        <section className="border-b border-medium-dark/40 bg-dark py-20" id="credibility">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="inline-flex items-center rounded-full border border-medium-dark/80 bg-dark/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-secondary-text">
                        {t('credibility.badge')}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-light md:text-3xl">
                        {t('credibility.title')}
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-secondary-text md:text-base">
                        {t('credibility.description')}
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-8 grid gap-4 md:grid-cols-3"
                >
                    {/* Point 1 */}
                    <motion.article variants={item} className="rounded-2xl border border-medium-dark bg-dark/60 p-5">
                        <h3 className="text-sm font-semibold text-light">
                            {t('credibility.point1_title')}
                        </h3>
                        <p className="mt-2 text-sm text-secondary-text">
                            {t('credibility.point1_desc')}
                        </p>
                    </motion.article>

                    {/* Point 2 */}
                    <motion.article variants={item} className="rounded-2xl border border-medium-dark bg-dark/60 p-5">
                        <h3 className="text-sm font-semibold text-light">
                            {t('credibility.point2_title')}
                        </h3>
                        <p className="mt-2 text-sm text-secondary-text">
                            {t('credibility.point2_desc')}
                        </p>
                    </motion.article>

                    {/* Point 3 */}
                    <motion.article variants={item} className="rounded-2xl border border-medium-dark bg-dark/60 p-5">
                        <h3 className="text-sm font-semibold text-light">
                            {t('credibility.point3_title')}
                        </h3>
                        <p className="mt-2 text-sm text-secondary-text">
                            {t('credibility.point3_desc')}
                        </p>
                    </motion.article>
                </motion.div>
            </div>
        </section>
    );
};

export default Credibility;
