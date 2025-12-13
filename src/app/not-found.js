'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-dark p-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="absolute inset-0 -z-10 blur-3xl bg-primary/20 rounded-full w-full h-full"></div>
                <h1 className="text-9xl font-bold text-primary neon-glow">404</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 space-y-4"
            >
                <h2 className="text-2xl font-bold text-light">Página no encontrada</h2>
                <p className="text-secondary-text max-w-md mx-auto">
                    Parece que te has perdido en el festival. La ruta que buscas no existe o ha sido movida a otro escenario.
                </p>

                <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-dark transition-all hover:bg-primary/90 hover:scale-105 mt-8"
                >
                    Volver al Main Stage
                </Link>
            </motion.div>

            {/* Background elements */}
            <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(10,14,39,0.9),rgba(10,14,39,0.9)),url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="grid-background absolute inset-0 opacity-20"></div>
            </div>
        </div>
    );
}
