/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#F2FB62",
                "light": "#FEFEFE",
                "secondary-text": "#C1C1C1",
                "dark": "#000000",
                "medium-dark": "#404040",
            },
            fontFamily: {
                "display": ["Urbanist", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
