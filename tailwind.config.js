/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './js/**/*.js'],
    theme: {
        extend: {
            colors: {
                ink: '#1a4357',
                cream: '#f6f5f2',
                'brand-deep': '#1a4357',
                plum: '#dd8462',
                gold: '#df9b88',
                sand: '#efe1dd',
                card: '#ffffff',
            },
            fontFamily: {
                sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
                display: ['"Libre Bodoni"', 'Didot', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
};
