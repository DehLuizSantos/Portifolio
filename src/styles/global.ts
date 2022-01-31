/* eslint-disable max-len */
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";
import theme from "./theme";

type GlobalStylesProps = {
  removeBg?: boolean;
};

export type ThemeProps = {
  theme: typeof theme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle<ThemeProps>`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      border: 0;
      box-sizing: border-box;
    }

  

    body,
    input,
    select,
    button {
      font-family: "Roboto", sans-serif;

      font-style: normal;
      background: transparent;
    }
    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    .Text,
    h1 {
      font-size: 45px;
      font-weight: bold;
      line-height: 19px;
      letter-spacing: -0.45px;
      color: #000000;
    }

    h2 {
      font-weight: normal;
      font-size: 30px;
      color: #000000;
    }

    h3 {
      font-weight: 500;
      font-size: 25px;
      color: #000000;
    }

    h4 {
      font-weight: 400;
      font-size: 18px;
      color: #000000;
    }

    h5 {
      font-weight: 300;
      font-size: 16px;
      color: #000000;
    }
    p {
      font-weight: 300;
      font-size: 16px;
    }

    a,
    
  `}

`;

export default GlobalStyles;
