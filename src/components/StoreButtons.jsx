import React from 'react';

const StoreButtons = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 opacity-60">
            {/* Apple Store Button (Disabled) */}
            <div className="relative group cursor-not-allowed">
                <button
                    disabled
                    className="flex items-center gap-3 bg-dark/90 border border-secondary-text/20 rounded-xl px-4 py-2.5 transition-all w-44 hover:bg-dark"
                >
                    <svg className="w-8 h-8 fill-current text-light" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.854 13.921c-.046-2.502 2.05-3.704 2.146-3.763-.006-.027-1.168-1.503-2.316-3.176-.982-1.428-2.008-1.599-2.583-1.619-1.396-.046-2.73 1.055-3.435 1.055-.71 0-1.801-.983-2.964-1.011-1.528-.035-2.943.896-3.729 2.274-1.592 2.757-.406 6.843 1.135 9.079.761 1.107 1.666 2.345 2.846 2.301 1.144-.047 1.576-.738 2.961-.738 1.378 0 1.77.738 2.977.714 1.23-.024 2.008-1.118 2.76-2.222.868-1.266 1.226-2.496 1.25-2.56-.028-.011-2.411-.926-2.435-3.565-.008-.063.003-.131.006-.196zm-2.85-8.239c.636-.769 1.066-1.841.948-2.913-1.017.042-2.251.677-2.981 1.524-.548.629-1.026 1.642-.901 2.614.996.077 2.302-.459 2.934-1.225z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] uppercase font-medium text-secondary-text">Coming soon to</span>
                        <span className="text-sm font-bold text-light mt-0.5">App Store</span>
                    </div>
                </button>
            </div>

            {/* Google Play Button (Disabled) */}
            <div className="relative group cursor-not-allowed">
                <button
                    disabled
                    className="flex items-center gap-3 bg-dark/90 border border-secondary-text/20 rounded-xl px-4 py-2.5 transition-all w-44 hover:bg-dark"
                >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-[#EA4335]" d="M3.609 1.814L13.793 12 3.609 22.186c-.198-.198-.362-.486-.362-.857V2.671c0-.371.164-.659.362-.857z" />
                        <path className="fill-[#34A853]" d="M13.793 12l2.607-2.607 4.887 2.791c.883.504.883 1.328 0 1.832l-4.887 2.791L13.793 12z" />
                        <path className="fill-[#4285F4]" d="M16.4 17.016l-2.607-2.607L3.609 22.186C4.09 22.68 4.85 22.76 5.56 22.36l10.84-6.194v.85z" />
                        <path className="fill-[#FBBC05]" d="M16.4 6.984l-10.84-6.194c-.71-.4-1.47-.32-1.951.174L13.793 12 16.4 6.984z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] uppercase font-medium text-secondary-text">Coming soon to</span>
                        <span className="text-sm font-bold text-light mt-0.5">Google Play</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default StoreButtons;
