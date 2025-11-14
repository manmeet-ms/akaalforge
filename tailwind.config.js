import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.cut-corner': {
          position: 'relative',
          overflow: 'hidden',
        },
        '.cut-corner::before': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '1.5em',
          height: '1.5em',
          background: 'white', // same as background or use currentColor
          transform: 'rotate(45deg) translate(50%, 50%)',
          transformOrigin: 'bottom right',
        },
      });
    }),
  ],
};
