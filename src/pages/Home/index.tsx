import React from "react";
import Button from "../../components/button";
import * as S from "./styles";
import Hire from "../../assets/icon/Hire.svg";
import Play from "../../assets/icon/play.svg";

const Home: React.FC = () => {
  return (
    <S.ContainerHome>
      <div className="position">
        <div className="name">
          <h1>
            <span className="light-green">&lt;</span> André Luiz
            <span className="light-green"> /&gt;</span>
          </h1>
          <h2 className="sub-name">
            <span className="light-green">&lt; </span>
            Desenvolvedor <span>FrontEnd</span>
            <span className="light-green"> /&gt;</span>
          </h2>
        </div>

        <div className="buttons">
          <div className="button">
            <Button iconButton={Hire} colorButton="blue">
              HIRE
            </Button>
          </div>
          <div className="button">
            <Button iconButton={Play} colorButton="purple">
              START
            </Button>
          </div>
        </div>
      </div>
    </S.ContainerHome>
  );
};

export default Home;
