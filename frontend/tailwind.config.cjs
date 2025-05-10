/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            fontFamily: {
                'helvetica': ['Helvetica Neue', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: "#241642",
                primary2: "#afa3c5",
                secondary: "#211933",
                tertiary: "#a98ec0",
                quaternary: "#a98ec0",
            },
            screens: {
                'xs': "450px",
                '3xl': "2160px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.jpeg')",
            },
            keyframes: {
                textRotate1: {
                    '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
                    '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
                },
                textRotate2: {
                    '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
                    '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
                },
                glow: {
                    '0%': {
                        textShadow: `
                            0 0 5px rgba(255, 255, 255, 0.2),
                            0 0 10px rgba(255, 255, 255, 0.2),
                            0 0 20px rgba(255, 255, 255, 0.2),
                            0 0 40px rgba(255, 255, 255, 0.2),
                            0 0 60px rgba(255, 255, 255, 0.2)
                        `
                    },
                    '100%': {
                        textShadow: `
                            0 0 5px rgba(255, 255, 255, 0.2),
                            0 0 10px rgba(255, 255, 255, 0.4),
                            0 0 20px rgba(255, 255, 255, 0.6),
                            0 0 40px rgba(255, 255, 255, 0.8),
                            0 0 60px rgba(255, 255, 255, 1)
                        `
                    }
                },
                parallax: {
                    to: {
                        transform: 'translateY(calc(var(--parallax-speed) * 1vh))'
                    }
                }
            },
            animation: {
                textRotate1: 'textRotate1 2.4s infinite alternate',
                textRotate2: 'textRotate2 2.4s infinite alternate',
                glow: 'glow 4s infinite alternate',
                parallax: 'parallax 0.1s linear'
            },
            fontSize: {
                title: '2rem',
                subtitle: '1.5rem',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate')
    ],
};