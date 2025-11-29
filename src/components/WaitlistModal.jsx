'use client';
import React, { useState } from 'react';
import { useTranslations } from '@/lib/i18n';

const WaitlistModal = ({ isOpen, onClose }) => {
    const t = useTranslations();
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/hello@festiroute.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    _subject: "Nuevo registro en FestiRoute Waitlist",
                    _template: "table"
                })
            });

            if (response.ok) {
                setSucceeded(true);
                setEmail('');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setSubmitting(false);
        }
    };

    if (succeeded) {
        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <div className="relative max-w-md w-full bg-dark border border-primary/30 rounded-2xl p-8 shadow-2xl">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-secondary-text hover:text-light transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-bold text-light">¡Bienvenido a FestiRoute!</h3>
                        <p className="text-secondary-text">
                            Gracias por unirte a la lista de espera. Te notificaremos cuando estemos listos para lanzar.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-4 btn-primary flex h-12 min-w-[120px] cursor-pointer items-center justify-center rounded-lg bg-primary px-5 text-base font-bold text-dark transition-all hover:bg-primary/90 hover:scale-105"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative max-w-md w-full bg-dark border border-medium-dark rounded-2xl p-8 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-secondary-text hover:text-light transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="flex flex-col gap-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-light mb-2">Únete a la lista de espera</h3>
                        <p className="text-secondary-text text-sm">
                            Sé el primero en saber cuándo FestiRoute esté disponible
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-light">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                required
                                className="h-12 rounded-lg border border-medium-dark bg-medium-dark/20 px-4 text-light placeholder:text-secondary-text/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="btn-primary flex h-12 cursor-pointer items-center justify-center rounded-lg bg-primary px-5 text-base font-bold text-dark transition-all hover:bg-primary/90 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                                    Enviando...
                                </span>
                            ) : (
                                'Unirme ahora'
                            )}
                        </button>

                        <p className="text-xs text-secondary-text/60 text-center">
                            No spam. Solo noticias importantes de FestiRoute.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
