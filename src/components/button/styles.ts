import styled, { css } from "styled-components";

type ButtonProps = {
  colorButton: "blue" | "purple";
};

export const ContainerButton = styled.div<ButtonProps>`
  ${({ theme, colorButton }) => css`
    cursor: pointer;
    .button {
      background: ${colorButton === "blue"
        ? theme.colors.colordarkBlue
        : theme.colors.colorpurple};
      border: 2px solid #191622;
      box-sizing: border-box;
      border-radius: 10px;
      width: 150px;
      height: 50px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      &:hover {
        transition: 1s;
        background-color: ${colorButton === "blue" &&
        `${theme.colors.colorblue}`};
        box-shadow: 0 0 40px ${theme.colors.colorgreen};

        background-color: ${colorButton === "purple" &&
        `${theme.colors.colorpurpleUltraLight}`};

        img {
          color: ${colorButton === "blue" && `${theme.colors.colorblue}`};
          color: ${colorButton === "purple" &&
          `${theme.colors.colorpurpleUltraLight}`};
        }
      }

      span {
        color: ${theme.colors.lightWhite};
        font-weight: bold;
        font-size: 22px;
      }

      img {
        margin-right: 10px;
        padding-bottom: 5px;
      }
    }
  `}
`;
