module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/@themesberg/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  
  plugins: [require('daisyui'), require('@themesberg/flowbite/plugin')],
}
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch