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
            primaryRed: "#DC0D0D",
            primaryBlack: "#000000",
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
