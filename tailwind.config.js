/** @type {import('tailwindcss').Config} */

module.exports = {
    important: true,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                primary: '#110964',
            },
            screens: {
                sm: '375px', // iphone SE
                md: '810px', // ipad 直向
                lg: '1080px', // ipad 橫向
                xl: '1280px', // mac air
                xxl: '1440px',
            },
        },
    },
    plugins: [],
}
