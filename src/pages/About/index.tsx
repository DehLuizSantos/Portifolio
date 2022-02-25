import React from "react";
import Title from "../../components/title";
import Profile from "../../assets/perfil-round.png";
import GitHub from "../../assets/icon/git-hub.svg";
import Facebook from "../../assets/icon/facebook.svg";
import Linkdn from "../../assets/icon/linkdn.svg";
import Whatsapp from "../../assets/icon/whatsapp.svg";

import * as S from "./styles";

const About: React.FC = () => {
  const profileInfoArray = [
    {
      info: "name",
      value: "André Luiz Santos",
    },
    {
      info: "state",
      value: "São Paulo/SP (Brazil)",
    },
    {
      info: "age",
      value: 30,
    },
    {
      info: "experience",
      value: "Front-end developer && UI-UX",
    },
    {
      info: "email",
      value: "and_consul@outlook.com",
    },
    {
      info: "formation",
      value: "Posgraduate in FullStack ",
    },
    {
      info: "stack",
      value: "[ React, TypeScript, Node]",
    },
  ];
  return (
    <S.ContainerAbout>
      <Title title="About-me" />
      <S.SocialMedia>
        <img src={Profile} alt="" />
        <div className="social-media">
          <a href="https://github.com/DehLuizSantos">
            <img src={GitHub} alt="Github" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100002153487792">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-luiz-844207102/">
            <img src={Linkdn} alt="Linkdn" />
          </a>
          <a href="whatsapp://send?text=Ola'">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
        </div>
      </S.SocialMedia>

      <S.ProfileInfos>
        <span className="purple">&#123;</span>
        {profileInfoArray.map((info, index) => (
          <div key={index} className="info">
            <span className="magento">{info.info}</span>
            <span className="magento-light">:</span>
            <span className="orange">{info.value}</span>
            <span className="blue">,</span>
          </div>
        ))}
        <span className="purple">&#125;</span>
      </S.ProfileInfos>
    </S.ContainerAbout>
  );
};

export default About;
