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
    backgroundcolor: "#0a0518",
    lightWhite: "#e6e6e6",
    colorblack: "#191622",
    colorlightBlack: "#4d4d4d",
    colorwhite: "#bfbfbf",
    colorpurple: "#483c67",
    colorpurpleLight: "#8d79ba",
    colorpurpleUltraLight: "#bd93f9",
    colorred: "#ff5555",
    colorlightRed: "#ff6e67",
    colorgreen: "#50fa7b",
    colorlightGreen: "#5af78e",
    coloryellow: "#effa78",
    colorlightYellow: "#eaf08d",
    colororange: "#ffbb00",
    colormagenta: "#ff79c6",
    colorlightMagenta: "#ff92d0",
    colorblue: "#3ebbd1",
    colordarkBlue: "#163f7c",
  },
  font: {
    family: "Roboto, sansserif",
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
