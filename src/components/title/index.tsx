import React from "react";
import * as S from "./styles";
import DividerCode from "../../assets/icon/divider-code.svg";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <S.ContainerTitle>
      <h1>{title}</h1>
      <S.Divider>
        <div className="divider-line"></div>
        <img src={DividerCode} alt="Divider logo" />
        <div className="divider-line"></div>
      </S.Divider>
    </S.ContainerTitle>
  );
};

export default Title;
