/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './home/**/*.php',
        './admins/**/*.php',
        './authentication/**/*.php',
        './app/**/*.php',
        './assets/src/**/*.js',
    ],
    theme: {
        extend: {
            keyframes: {
                'soft-in': {
                    from: { opacity: '0', transform: 'translateY(8px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: { 'soft-in': 'soft-in 0.3s ease-out both' },
        },
    },
    plugins: [],
};
