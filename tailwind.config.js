/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        flex: {
            1: '1 1 0%',
            2: '2 2 0%',
            3: '3 3 0%',
        },
        extend: {},
    },
    plugins: [],
};
