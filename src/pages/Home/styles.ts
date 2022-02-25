import styled, { css } from "styled-components";
import matrixCode from "../../assets/matrix-code.gif";

export const ContainerHome = styled.div`
  ${({ theme }) => css`
    padding: 290px 0 50px 0;
    text-align: center;
    height: 100vh;

    background-image: url(${matrixCode});
    .name {
      h1 {
        color: ${theme.colors.lightWhite};
        font-size: 30px;
        line-height: 34px;
        font-weight: 600;
        @media (min-width: ${theme.screen.md}px) {
          font-size: 40px;
        }
        @media (min-width: ${theme.screen.lg}px) {
          font-size: 55px;
          margin-bottom: 30px;
        }
      }
      h2 {
        margin-top: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 29px;
        color: ${theme.colors.lightWhite};
        @media (min-width: ${theme.screen.md}px) {
          font-size: 30px;
          margin-top: 25px;
        }
        @media (min-width: ${theme.screen.lg}px) {
          font-size: 40px;
          margin-top: 40px;
        }
      }
      .light-green {
        color: ${theme.colors.colorlightGreen};
      }
    }
    .buttons {
      display: flex;
      margin: 40px auto;
      justify-content: center;
      @media (min-width: ${theme.screen.md}px) {
        margin-top: 55px;
      }

      .button {
        margin: 5px;
      }
    }
  `}
`;
