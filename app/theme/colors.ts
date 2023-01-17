// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#6bd3bf",
  primary200: "#6bd3bf",
  primary300: "#6bd3bf",
  primary400: "#6bd3bf",
  primary500: "#6bd3bf",
  primary600: "#6bd3bf",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#424656",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  palette,
  white: "#FFFFFF",
  black: "#000000",
  transparent: "rgba(0, 0, 0, 0)",
  primary: "#6bd3bf",
  secondary: "",
  background: "#424656",
  backgroundSecondary: "#4B5064",
  dim: "#978F8A",
  error: "#C03403",
  errorBackground: "#F2D6CD",
}
