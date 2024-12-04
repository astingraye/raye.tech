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
  safelist: [
    'text-ctp-rosewater',
    'text-ctp-flamingo',
    'text-ctp-pink',
    'text-ctp-mauve',
    'text-ctp-red',
    'text-ctp-maroon',
    'text-ctp-peach',
    'text-ctp-yellow',
    'text-ctp-green',
    'text-ctp-teal',
    'text-ctp-sky',
    'text-ctp-sapphire',
    'text-ctp-blue',
    'text-ctp-lavender',
    'fill-ctp-rosewater',
    'fill-ctp-flamingo',
    'fill-ctp-pink',
    'fill-ctp-mauve',
    'fill-ctp-red',
    'fill-ctp-maroon',
    'fill-ctp-peach',
    'fill-ctp-yellow',
    'fill-ctp-green',
    'fill-ctp-teal',
    'fill-ctp-sky',
    'fill-ctp-sapphire',
    'fill-ctp-blue',
    'fill-ctp-lavender'
  ],
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
  ],
};
