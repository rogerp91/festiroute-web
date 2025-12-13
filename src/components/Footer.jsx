'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/lib/i18n';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="mt-20 border-t border-white/5 bg-[#050505] py-10 relative overflow-hidden">
      {/* Subtle glow for premium feel */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand & Copyright - Compact Block */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href={`/${locale}`} className="inline-block hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-light tracking-tight">
              FestiRoute
            </span>
          </Link>
          <p className="text-[10px] uppercase tracking-wider text-secondary-text/40 font-medium">
            © 2025 Aldayl & Co.
          </p>
        </div>

        {/* Navigation & Links - Horizontal List */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {/* Product Links */}
          <div className="flex items-center gap-6">
            <a href="#features" className="text-xs font-medium text-secondary-text hover:text-primary transition-colors">
              {t('nav.features')}
            </a>
            <a href="#dazzy" className="text-xs font-medium text-secondary-text hover:text-primary transition-colors">
              {t('nav.dazzy')}
            </a>
          </div>

          {/* Divider */}
          <span className="hidden md:block w-px h-3 bg-white/10"></span>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/terms`} className="text-xs font-medium text-secondary-text hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
            <Link href={`/${locale}/privacy`} className="text-xs font-medium text-secondary-text hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>

          {/* Divider */}
          <span className="hidden md:block w-px h-3 bg-white/10"></span>

          {/* Professional Extra: Contact */}
          <a href="mailto:hello@festiroute.com" className="text-xs font-medium text-light/80 hover:text-primary transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            hello@festiroute.com
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
