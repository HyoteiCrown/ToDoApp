export default {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          "background-gradient": "linear-gradient(to bottom, #a4d0ca, #b59d73)",
          "background-gradient-dark":
            "linear-gradient(to bottom, #2f5b55, #b59d73)",
        },
        colors: {
          textcolor: "#ebf5f4",
          background: "#312f3e",
          primary: "#a4d0ca",
          secondary: "#64353d",
          accent: "#b59d73",
        },
      },
    },
    plugins: [],
  };