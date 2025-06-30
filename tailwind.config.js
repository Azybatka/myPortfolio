module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        dark: '#2c3e50',
        light: '#ecf0f1',
        mainBg: '#2E7D32',
        darkPurple: '#4A2C60',
        darkGreen: '#1B5E20',
        brightGreen: '#76FF03',
        lightPurple: '#E6E6FA',
        brightBlue: '#1E90FF', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}