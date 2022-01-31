function pxToRem(rem: any): string {
  return (parseInt(rem) / 16).toString() + "rem";
}

export default {
  screen: {
    sl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 350,
  },
  container: {
    sl: "85vw", // 1440
    xl: "90vw", // 1200
    lg: "90vw", // 992
    md: "80vw", // 768
    sm: "87vw", // 576
    xs: "85vw", // 350
    xxs: "90vw",
  },
  colors: {
    primary: "#15F84E",
    gray: "#6E49D8",
    background: "#656565",
    Foreground: "#2E2C2C",
    title: "#CDCDBC",
    text: "#838377",
  },
  font: {
    family: "Roboto, sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xs: pxToRem(12),
      sm: pxToRem(14),
      md: pxToRem(16),
      lg: pxToRem(18),
      xl: pxToRem(22),
      sl: pxToRem(24),
    },
  },
} as const;
