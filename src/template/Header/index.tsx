import React from "react";
import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import Hamburguer from "../../assets/icon/hamburguer.svg";
import Close from "../../assets/icon/close.svg";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <S.ContainerNavbar>
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo André" />
          <p>André Luiz Santos</p>
        </div>
      </a>
      <S.MenuHamburguer openMenu={openMenu}>
        <button onClick={() => setOpenMenu(!openMenu)}>
          <img src={openMenu ? Close : Hamburguer} alt="Menu Hamburguer" />
        </button>

        <div className="open-menu">
          <a href="/">Home</a>
          <a href="/Skills">Skills</a>
          <a href="/Projects">Projects</a>
          <a href="/Contact">Contact</a>
        </div>
      </S.MenuHamburguer>

      <div className="navbar">
        <a href="/">Home</a>
        <a href="/Skills">Skills</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact">Contact</a>
      </div>
    </S.ContainerNavbar>
  );
};

export default Header;
