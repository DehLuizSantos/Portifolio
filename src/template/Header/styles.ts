import styled, { css } from "styled-components";

export const ContainerNavbar = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.Foreground};
    height: 100px;
    display: flex;
    padding: 0 10vw;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      p {
        margin-left: 15px;
        color: ${theme.colors.text};
      }
    }
    .navbar {
      a {
        margin: 10px;
        color: ${theme.colors.primary};
        font-size: 25px;
        font-weight: 500;
        padding: 5px;
        &:hover {
          border-bottom: 3px solid ${theme.colors.primary};
        }
      }
    }
  `}
`;
