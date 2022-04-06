import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as S from "./Viagem.style";

import Mock from "../../mock/pacotes.json";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import Calendar from "../../assets/icons/Calendar.svg";
import Camping from "../../assets/icons/Camping.svg";
import Mountain from "../../assets/icons/Mountain.svg";
import Mapa from "../../assets/icons/Map.svg";

const Viagem = () => {
  return (
    <>
      <NavBar />
      <S.Viagem>
        <S.Info>
          <h5 className="breadcrumb">
            <Link to="/">Início</Link>/<Link to="/">Pacotes de turimo</Link>/
            {Mock.pacotes[1].nome}
          </h5>
          <img src={Mock.pacotes[1].foto} alt="Foto do local" />
          <div className="nomeValor">
            <span>{Mock.pacotes[1].nome}</span>
            <span>R${Mock.pacotes[1].valor}</span>
          </div>
          <p className="descricao">{Mock.pacotes[1].descricao}</p>
          <p className="vagas">X vagas ainda disponíveis</p>
          <div className="pessoas">
            <p>Quantidade de pessoas</p>
            <span>0</span>
          </div>
        </S.Info>
        <div className="containerBtn">
          <Button className="">
            <Link to="/resumo">Comprar Pacote</Link>
          </Button>
        </div>
        <S.Dicas>
          <div className="iconName">
            <img src={Camping} alt="Icone" />
            <p>Hospedagem</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <div className="iconName">
            <img src={Mountain} alt="Icone" />
            <p>Atividades</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <div className="iconName">
            <img src={Calendar} alt="Icone" />
            <p>Datas</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <div className="iconName">
            <img src={Mapa} alt="Icone" />
            <p>Dicas de viagem</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
        </S.Dicas>
      </S.Viagem>
      <Footer />
    </>
  );
};

export default Viagem;
