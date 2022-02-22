import React from "react";
import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import Hamburguer from "../../assets/icon/hamburguer.svg";
import Close from "../../assets/icon/close.svg";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <S.ContainerNavbar openMenu={openMenu}>
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo André" />
        </div>
      </a>
      <S.MenuHamburguer openMenu={openMenu}>
        <button onClick={() => setOpenMenu(!openMenu)}>
          <img src={openMenu ? Close : Hamburguer} alt="Menu Hamburguer" />
        </button>
        <div className="menu">
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </S.MenuHamburguer>
    </S.ContainerNavbar>
  );
};

export default Header;
