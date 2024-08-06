/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js"
    ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
          {
            light: {
              primary: "#570df8",
              secondary: "#f000b8",
              accent: "#37cdbe",
              neutral: "#3d4451",
              "base-100": "#ffffff",
            },
            dark: {
              primary: "#661ae6",
              secondary: "#d926a9",
              accent: "#1fb2a6",
              neutral: "#191d24",
              "base-100": "#2a303c",
            },
          },
        ],
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
  
}

