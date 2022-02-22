import React from "react";
import * as S from "./styles";

type buttonProps = {
  iconButton: string;

  colorButton: "blue" | "purple";
};

const Button: React.FC<buttonProps> = ({
  iconButton,
  children,
  colorButton,
}) => {
  return (
    <S.ContainerButton colorButton={colorButton}>
      <div className="button">
        <img src={iconButton} alt="icone" />
        <button>
          <span>{children}</span>
        </button>
      </div>
    </S.ContainerButton>
  );
};

export default Button;
