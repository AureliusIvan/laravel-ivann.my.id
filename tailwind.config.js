import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                animatedgradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
            animation: {
                gradient: 'animatedgradient 4s ease infinite alternate',
            },
        },
        colors: {
            ...defaultTheme.colors,
            primary: "#000000",
            secondary: "#b091ff",
            accent: "#012622",
            primaryWhite: "#F9F5F2",
            white: "#FFFFFF",
            green: "#198754",
            transparentWhite: "rgba(255,255,255,0.3)",
            transparent: "transparent",
            primaryRed: "#DC0D0D",
            primaryBlack: "#000000",
            primaryPink: "#ff69b4",
        },
        padding: {
            ...defaultTheme.padding,
            boxS: "1rem",
            boxMd: "2rem",
            boxXl: "3rem",
        }
    },
    plugins: [forms],
};
