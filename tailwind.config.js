
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#003366",   // Navy Blue
          secondary: "#6C7A89", // Cool Gray
          accent: "#D2D7D3"     // Metallic Silver
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: [],
}
