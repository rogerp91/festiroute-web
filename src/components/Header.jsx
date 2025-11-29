'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from '@/lib/i18n';
import { useRouter, usePathname } from 'next/navigation';

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

    const changeLanguage = (lng) => {
        router.push(`/${lng}`);
        setIsLangDropdownOpen(false);
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
                    <span className="text-xl font-bold tracking-tight text-light">FestiRoute</span>
                </div>
                <nav className="hidden items-center gap-8 md:flex">
                    <button onClick={(e) => handleNavClick(e, 'funcionalidades')} className="text-sm font-semibold leading-normal text-light hover:text-primary transition-colors cursor-pointer bg-transparent border-none">{t('nav.features')}</button>
                    <button onClick={(e) => handleNavClick(e, 'dazzy-ia')} className="text-sm font-semibold leading-normal text-light hover:text-primary transition-colors cursor-pointer bg-transparent border-none">{t('nav.dazzy')}</button>
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

            {isMobileMenuOpen && (
                <div id="mobile-menu" className="mobile-menu fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-dark/95 backdrop-blur-lg border-l border-medium-dark md:hidden">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b border-medium-dark">
                            <span className="text-lg font-bold text-light">Menu</span>
                            <button
                                id="mobile-menu-close"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-medium-dark bg-dark text-light hover:bg-medium-dark transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <nav className="flex flex-col gap-2 p-4">
                            <button className="text-lg font-semibold text-light hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-medium-dark/50 text-left" onClick={(e) => handleNavClick(e, 'funcionalidades')}>{t('nav.features')}</button>
                            <button className="text-lg font-semibold text-light hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-medium-dark/50 text-left" onClick={(e) => handleNavClick(e, 'dazzy-ia')}>{t('nav.dazzy')}</button>
                            <button className="text-lg font-semibold text-light hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-medium-dark/50 text-left" onClick={(e) => handleNavClick(e, 'para-quem-e')}>{t('nav.who_is_it_for')}</button>

                            <div className="mt-4 border-t border-medium-dark pt-4">
                                <p className="text-sm text-secondary-text mb-2 px-4">Idioma</p>
                                <div className="flex gap-2 px-4">
                                    <button onClick={() => changeLanguage('es')} className={`p-2 rounded ${currentLang === 'es' ? 'bg-primary text-dark' : 'bg-medium-dark text-light'}`}>ES</button>
                                    <button onClick={() => changeLanguage('en')} className={`p-2 rounded ${currentLang === 'en' ? 'bg-primary text-dark' : 'bg-medium-dark text-light'}`}>EN</button>
                                    <button onClick={() => changeLanguage('pt')} className={`p-2 rounded ${currentLang === 'pt' ? 'bg-primary text-dark' : 'bg-medium-dark text-light'}`}>PT</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
