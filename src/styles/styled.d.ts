import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      tertiary: string;
      background: string;
      Foreground: string;
      title: string;
      text: string;
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
