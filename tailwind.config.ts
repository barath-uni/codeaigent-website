import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from '@tailwindcss/typography';

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          floralWhite: "#fbf7ee",
          jordyBlue: "#85b7fe",
          coquelicot: "#f64620",
          sandyBrown: "#ffab58",
          sapphire: "#0053a6",
          schoolBusYellow: "#ffdc31",
          byzantineBlue: "#2c4ce6",
          licorice: "#211b1b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #fbf7ee, #85b7fe, #0053a6)',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
