'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import DazzyAI from '@/components/DazzyAI';
import WhoIsItFor from '@/components/WhoIsItFor';
import Credibility from '@/components/Credibility';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
    useEffect(() => {
        // Scroll reveal animation setup
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative flex w-full flex-col dark">
            <Header />
            <AnimatePresence mode="wait">
                <motion.main
                    className="flex w-full flex-col items-center"
                >
                    <div className="w-full max-w-7xl px-4">
                        <Hero />
                        <HowItWorks />
                        <Features />
                        <DazzyAI />
                        <WhoIsItFor />
                        <Credibility />
                        <CTA />
                    </div>
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
