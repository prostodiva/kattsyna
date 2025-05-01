export default  {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#011825",
                secondary: "#F0EFEB",
                tertiary: "#0D3056",
                quaternary: "#1689C8",
            },
            screens: {
                'xs': "450px",
                '3xl': "2160px",
            }
        }
    }
}
