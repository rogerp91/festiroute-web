'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/lib/i18n';

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="mt-16 border-t border-medium-dark/40 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        {/* Info Section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-secondary-text tracking-wide">
            © 2025 FestiRoute. {t('footer.rights')}
          </p>

          <p className="flex items-center gap-2 text-xs">
            <span className="h-[1px] w-4 rounded-full bg-medium-dark md:hidden"></span>
            <span className="uppercase tracking-[0.18em] text-secondary-text/60">
              {t('footer.developed_in')}
            </span>
            <span className="inline-flex items-center gap-1.5">
              🇦🇷 <span className="text-light font-medium">Argentina</span>
            </span>
            <span className="text-secondary-text/40">·</span>
            <span className="inline-flex items-center gap-1.5">
              🇨🇦 <span className="text-light font-medium">Canadá</span>
            </span>
          </p>
        </div>

        {/* Links Section */}
        <div className="flex items-center justify-center gap-6 border-t border-medium-dark/30 pt-4 md:justify-start">
          <Link className="text-sm font-semibold text-light hover:text-primary transition-colors" href={`/${locale}/terms`}>
            {t('footer.terms')}
          </Link>
          <span className="text-secondary-text/40">·</span>
          <Link className="text-sm font-semibold text-light hover:text-primary transition-colors" href={`/${locale}/privacy`}>
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
