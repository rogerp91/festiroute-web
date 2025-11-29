'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from '@/lib/i18n';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const changeLanguage = (lng) => {
        router.push(`/${lng}`);
        setIsLangDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const currentLang = locale;

    const getFlag = (lng) => {
        switch (lng) {
            case 'es': return 'https://flagcdn.com/w40/es.png';
            case 'en': return 'https://flagcdn.com/w40/us.png';
            case 'pt': return 'https://flagcdn.com/w40/br.png';
            default: return 'https://flagcdn.com/w40/es.png';
        }
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 flex items-center justify-center border-b border-solid border-b-medium-dark bg-dark/80 px-4 py-3 backdrop-blur-custom transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
            <div className="flex w-full max-w-7xl items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tight text-light no-underline hover:text-primary transition-colors">
                        FestiRoute
                    </Link>
                </div>
                <nav className="hidden items-center gap-8 md:flex">
                    <button onClick={(e) => handleNavClick(e, 'funcionalidades')} className="text-sm font-semibold leading-normal text-light hover:text-primary transition-colors cursor-pointer bg-transparent border-none">{t('nav.features')}</button>
                    <a href="https://dazzyia.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-normal text-light hover:text-primary transition-colors cursor-pointer no-underline">{t('nav.dazzy')}</a>
                    <button onClick={(e) => handleNavClick(e, 'para-quem-e')} className="text-sm font-semibold leading-normal text-light hover:text-primary transition-colors cursor-pointer bg-transparent border-none">{t('nav.who_is_it_for')}</button>
                </nav>
                <div className="flex items-center gap-2">
                    <button className="btn-primary flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primary bg-primary px-4 text-sm font-bold leading-normal tracking-wide text-dark transition-all hover:bg-primary/90 hover:border-primary/90 hover:shadow-lg">
                        <span className="truncate">{t('nav.view_app')}</span>
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="hidden md:flex h-10 cursor-pointer items-center justify-center gap-1.5 overflow-hidden rounded-lg border border-medium-dark bg-dark px-2.5 text-sm font-bold leading-normal tracking-wide text-light transition-colors hover:bg-medium-dark"
                        >
                            <img alt={currentLang} className="h-4 w-4 rounded-full object-cover" src={getFlag(currentLang)} />
                            <span className="uppercase">{currentLang}</span>
                            <span className="material-symbols-outlined text-base text-light">expand_more</span>
                        </button>
                        {isLangDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-32 flex flex-col overflow-hidden rounded-lg border border-medium-dark bg-dark shadow-xl z-50">
                                <button onClick={() => changeLanguage('es')} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-light hover:bg-medium-dark transition-colors w-full text-left">
                                    <img src="https://flagcdn.com/w40/es.png" alt="Español" className="h-4 w-4 rounded-full object-cover" />
                                    <span>Español</span>
                                </button>
                                <button onClick={() => changeLanguage('en')} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-light hover:bg-medium-dark transition-colors w-full text-left">
                                    <img src="https://flagcdn.com/w40/us.png" alt="English" className="h-4 w-4 rounded-full object-cover" />
                                    <span>English</span>
                                </button>
                                <button onClick={() => changeLanguage('pt')} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-light hover:bg-medium-dark transition-colors w-full text-left">
                                    <img src="https://flagcdn.com/w40/br.png" alt="Português" className="h-4 w-4 rounded-full object-cover" />
                                    <span>Português</span>
                                </button>
                            </div>
                        )}
                    </div>
                    <button
                        id="mobile-menu-button"
                        className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-medium-dark bg-dark text-light hover:bg-medium-dark transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 9998,
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden'
                            }}
                        />

                        {/* Menu */}
                        <motion.div
                            id="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-[280px] bg-dark/95 backdrop-blur-xl border-l border-medium-dark md:hidden shadow-2xl"
                            style={{
                                position: 'fixed',
                                height: '100vh',
                                height: '100dvh',
                                maxHeight: '-webkit-fill-available',
                                zIndex: 9999,
                                WebkitOverflowScrolling: 'touch',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                                paddingTop: 'env(safe-area-inset-top)',
                                paddingBottom: 'env(safe-area-inset-bottom)',
                                paddingRight: 'env(safe-area-inset-right)'
                            }}
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 border-b border-medium-dark flex-shrink-0">
                                    <span className="text-lg font-bold text-light">Menu</span>
                                    <button
                                        id="mobile-menu-close"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-medium-dark bg-medium-dark/50 text-light hover:bg-medium-dark transition-colors active:scale-95"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <nav
                                    className="flex-1 overflow-y-auto overflow-x-hidden p-4"
                                    style={{
                                        WebkitOverflowScrolling: 'touch',
                                        overscrollBehavior: 'contain'
                                    }}
                                >
                                    <div className="flex flex-col gap-2">
                                        <button
                                            className="text-base font-semibold text-light hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-medium-dark/50 active:bg-medium-dark text-left w-full"
                                            onClick={(e) => handleNavClick(e, 'funcionalidades')}
                                        >
                                            {t('nav.features')}
                                        </button>
                                        <a
                                            href="https://dazzyia.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-semibold text-light hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-medium-dark/50 active:bg-medium-dark text-left no-underline block"
                                        >
                                            {t('nav.dazzy')}
                                        </a>
                                        <button
                                            className="text-base font-semibold text-light hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-medium-dark/50 active:bg-medium-dark text-left w-full"
                                            onClick={(e) => handleNavClick(e, 'para-quem-e')}
                                        >
                                            {t('nav.who_is_it_for')}
                                        </button>

                                        {/* Language Section */}
                                        <div className="mt-6 pt-4 border-t border-medium-dark">
                                            <p className="text-xs uppercase tracking-wider text-secondary-text/70 mb-3 px-2 font-semibold">
                                                {currentLang === 'es' ? 'Idioma' : currentLang === 'en' ? 'Language' : 'Idioma'}
                                            </p>
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    onClick={() => changeLanguage('es')}
                                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all active:scale-98 ${currentLang === 'es' ? 'bg-primary/20 text-primary border border-primary/30' : 'hover:bg-medium-dark/50 active:bg-medium-dark text-light border border-transparent'}`}
                                                >
                                                    <img src="https://flagcdn.com/w40/es.png" alt="Español" className="h-5 w-5 rounded-full object-cover flex-shrink-0" />
                                                    <span className="font-medium">Español</span>
                                                    {currentLang === 'es' && <span className="material-symbols-outlined ml-auto text-base">check</span>}
                                                </button>
                                                <button
                                                    onClick={() => changeLanguage('en')}
                                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all active:scale-98 ${currentLang === 'en' ? 'bg-primary/20 text-primary border border-primary/30' : 'hover:bg-medium-dark/50 active:bg-medium-dark text-light border border-transparent'}`}
                                                >
                                                    <img src="https://flagcdn.com/w40/us.png" alt="English" className="h-5 w-5 rounded-full object-cover flex-shrink-0" />
                                                    <span className="font-medium">English</span>
                                                    {currentLang === 'en' && <span className="material-symbols-outlined ml-auto text-base">check</span>}
                                                </button>
                                                <button
                                                    onClick={() => changeLanguage('pt')}
                                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all active:scale-98 ${currentLang === 'pt' ? 'bg-primary/20 text-primary border border-primary/30' : 'hover:bg-medium-dark/50 active:bg-medium-dark text-light border border-transparent'}`}
                                                >
                                                    <img src="https://flagcdn.com/w40/br.png" alt="Português" className="h-5 w-5 rounded-full object-cover flex-shrink-0" />
                                                    <span className="font-medium">Português</span>
                                                    {currentLang === 'pt' && <span className="material-symbols-outlined ml-auto text-base">check</span>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
