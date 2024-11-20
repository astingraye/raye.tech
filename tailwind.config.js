module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  theme: {
    extend: {
      screens: {
        sm: '600px',  // Small screens and up
        md: '768px',  // Medium screens and up
        lg: '1024px', // Large screens and up
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
  ],
};
