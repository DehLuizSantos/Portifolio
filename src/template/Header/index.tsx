import React from "react";
import { ContainerNavbar } from "./styles";
import logo from "../../assets/Logo.svg";

const Header: React.FC = () => {
  return (
    <ContainerNavbar>
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo André" />
          <p>André Luiz Santos</p>
        </div>
      </a>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/Skills">Skills</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact">Contact</a>
      </div>
    </ContainerNavbar>
  );
};

export default Header;
