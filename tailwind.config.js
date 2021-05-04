module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      new: '-4px -6px 13px rgb(255, 255, 255), 4px 4px 13px rgba(0, 0, 0, 0.270)',
      mobile: '-2px -4px 8px rgb(255, 255, 255), 2px 2px 8px rgba(0, 0, 0, 0.270)',
      search: '-3px -5px 10px rgb(255, 255, 255), 4px 4px 13px rgba(0, 0, 0, 0.270)',
      focus: '-5px -6px 13px rgb(255, 255, 255), 6px 6px 15px rgba(0, 0, 0, 0.270)',
      input : 'inset 4px 4px 8px #cbced1, inset -4px -3px 10px #fff;',
      input_f : 'inset 6px 6px 8px #cbced1, inset -5px -4px 10px #fff;'
    },
    extend: {
      screens: {
        'xsm': '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
