import styled, { css } from "styled-components";

export const ContainerHome = styled.div`
  ${({ theme }) => css`
    padding: 290px 0 50px 0;
    text-align: center;
    height: 100vh;

    .name {
      h1 {
        color: ${theme.colors.lightWhite};
        font-size: 30px;
        line-height: 34px;
        font-weight: 600;
        @media (min-width: ${theme.screen.md}px) {
          font-size: 40px;
        }
      }
      h2 {
        margin-top: 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 29px;
        color: ${theme.colors.lightWhite};
        @media (min-width: ${theme.screen.md}px) {
          font-size: 30px;
          margin-top: 25px;
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

      .button {
        margin: 5px;
      }
    }
  `}
`;
