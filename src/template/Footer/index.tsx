import React from "react";
import * as S from "./styles";
import Logo from "../../assets/Logo.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";
import linkdn from "../../assets/icon/linkdn.svg";
import github from "../../assets/icon/gitHub.svg";

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <img src={Logo} alt="Logo" />
      <h2>Working with talent and help people to sucess is my passion;</h2>

      <S.SocialMediaWrapper>
        <div className="social-media-wrapper">
          <div className="social-media">
            <h3>Social</h3>
            <div className="divider" />
            <a
              href="https://api.whatsapp.com/send?phone=5511979539358&text=Olá!."
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>

            <a
              href="https://github.com/DehLuizSantos"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkdn} alt="Linkdn" />
            </a>

            <a
              href="https://www.linkedin.com/in/andr%C3%A9-luiz-844207102/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>

          <div className="social-media">
            <h3>Contact</h3>
            <div className="divider" />
            <p>+55(11)9907-9358</p>
            <p>and_consul@outlook.com</p>
          </div>

          <div className="social-media">
            <h3>Addresses</h3>
            <div className="divider" />
            <p>São Paulo | SP</p>
          </div>
        </div>
      </S.SocialMediaWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
