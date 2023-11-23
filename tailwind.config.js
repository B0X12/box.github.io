module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "black": "#1f2024",
        "white-gray": "#f1f2f7",

        "black-100": "#1f2024",
        "black-80": "#28292e",
        "black-60": "#33353c", // 303139
        "black-50": "#393b42", // 303139
        "black-40": "#42444c",
        "black-20": "#83889a",
        "black-10": "#c3c6d1",
        "black-7": "#d4d8e5",

        // notion category
        "fuchsia-200": "#f3f6fb", // gray          backup : ff80ed
        "stone-200": "#ff6c7b",   // red           backup : b5b7c1
        "emerald-100": "#ffee90", // yellow        backup : 79fff0 
        "sky-200": "#88e3f6",     // blue^green    backup : 80e1ff
        "blue-200": "#80c5ff", 
        "rose-200": "#ff80ab",
        "violet-200": "#e080ff",
        "green-200": "#80ffcb",
        "yellow-100": "#ffdf6c",
        "red-200": "#ff6c7b",
        "pink-100": "#ff9db8",
        "purple-200": "#b080ff",
        "indigo-200": "#1d2143",
      },
      boxShadow: {
        'light': '0 3px 13px 2px rgba(86, 92, 124, 0.1)',
        'dark': '0 0px 13px 2px rgba(195, 198, 209, 0.2)',
      }
    }
  },
  variants: {},
  plugins: []
}
