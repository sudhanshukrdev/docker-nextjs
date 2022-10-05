module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
    blur: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#7ac0f8',
          light: '#4dabf5',
          main: '#2196f3',
          dark: '#1a78c2',
          darker: '#145a92',
        },
      },
    },
  },
  plugins: [],
};
