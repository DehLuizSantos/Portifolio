import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundcolor: string;
      lightWhite: string;
      colorblack: string;
      colorlightBlack: string;
      colorwhite: string;
      colorpurple: string;
      colorpurpleLight: string;
      colorpurpleUltraLight: string;
      colorred: string;
      colorlightRed: string;
      colorgreen: string;
      colorlightGreen: string;
      coloryellow: string;
      colorlightYellow: string;
      colororange: string;
      colormagenta: string;
      colorlightMagenta: string;
      colorblue: string;
      colordarkBlue: string;
    };
    screen: {
      sl: number;
      xl: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };
    container: {
      sl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
      xxs: string;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        sl: string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
  }
}
