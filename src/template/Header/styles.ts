import styled, { css } from "styled-components";

type NavbarProps = {
  openMenu: boolean;
};

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
        display: none;
        @media (min-width: ${theme.screen.md}px) {
          display: inline;
          margin: 10px;
          color: ${theme.colors.primary};
          font-size: 25px;
          font-weight: 500;
          padding: 5px;
        }
        &:hover {
          border-bottom: 3px solid ${theme.colors.primary};
        }
      }
    }
  `}
`;

export const MenuHamburguer = styled.div<NavbarProps>`
  ${({ theme, openMenu }) => css`
    margin-left: 100px;
    button {
      @media (min-width: ${theme.screen.md}px) {
        display: none;
      }
    }
    .open-menu {
      transition: all ease-in 0.3s;
      padding: ${openMenu ? "15px" : "0 15px"};
      max-height: ${openMenu ? "100%" : "0"};
      opacity: ${openMenu ? "1" : "0"};

      position: absolute;
      top: 100px;
      right: 0;
      width: 100%;
      height: 270px;
      background-color: ${theme.colors.Foreground};
      a {
        display: block;
        text-align: center;
        margin: 20px;
        font-size: 25px;
        color: ${theme.colors.primary};
      }
    }
  `}
`;
