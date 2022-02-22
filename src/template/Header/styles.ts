import styled, { css } from "styled-components";

type NavbarProps = {
  openMenu: boolean;
};

export const ContainerNavbar = styled.header<NavbarProps>`
  ${({ openMenu }) => css`
    backdrop-filter: blur(3px);
    background: rgba(255, 255, 255, 0.2);
    height: ${openMenu ? "250px" : "90px"};
    transition: all ease-in 0.1s;
    width: 100%;
    padding: 0 10vw;
    display: flex;
    position: fixed;
    right: 0;
    padding-bottom: 10px;
    align-items: ${openMenu ? "end" : "center;"};
    padding-top: ${openMenu ? "50px" : "0"};
    .logo {
      background-color: #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: ${openMenu ? "none" : "block"};
      img {
        width: 50px;
        height: 50px;
      }
    }
  `}
`;

export const MenuHamburguer = styled.div<NavbarProps>`
  ${({ theme, openMenu }) => css`
    text-align: end;
    margin-left: auto;
    display: block;
    @media (min-width: ${theme.screen.md}px) {
      margin-left: 10px;
    }
    button {
      @media (min-width: ${theme.screen.md}px) {
        display: none;
      }
    }

    .menu {
      display: ${openMenu ? "block" : "none"};
      @media (min-width: ${theme.screen.md}px) {
        display: block;
      }
      ul {
        display: ${openMenu ? "block" : "flex"};
        list-style: none;
        width: ${openMenu ? "100%" : "50px"};
        li {
          margin-top: ${openMenu ? "20px" : "0"};
          margin-left: 40px;
          color: ${theme.colors.lightWhite};
          font-weight: 600;
          font-size: 20px;
          line-height: 26px;
        }
      }
    }
  `}
`;
