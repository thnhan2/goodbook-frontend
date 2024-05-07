/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/**/*.{html,js,ejs}', './views/*.ejs', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                primary: '#F4F1EA',
                secondary: '#6E5942',
                accent: '#0000FF',
            },
        },
    },
    plugins: [],
};
