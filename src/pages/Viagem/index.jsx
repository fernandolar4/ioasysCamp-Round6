import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as S from "./Viagem.style";

import Mock from "../../mock/pacotes.json";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Calendar from "../../assets/icons/Calendar.svg";
import Camping from "../../assets/icons/Camping.svg";
import Mountain from "../../assets/icons/Mountain.svg";
import Mapa from "../../assets/icons/Map.svg";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Viagem = () => {
  const [viagemDesc, setViagemDesc] = useState([]);
  const location = useLocation();
  const viagemID = location.state;

  useEffect(() => {
    api
      .get(`/tours/${viagemID}`)
      .then((response) => setViagemDesc(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, []);

  return (
    <>
      {console.log(viagemDesc)}
      <NavBar />
      <S.Viagem>
        <S.Info>
          <h5 className="breadcrumb">
            <Link to="/">Início</Link>/<Link to="/">Pacotes de turimo</Link>/
            {viagemDesc.tourName}
          </h5>
          <img src={viagemDesc.photo1} alt="Foto do local" />
          <div className="nomeValor">
            <span>{viagemDesc.tourName}</span>
            <span>R$ {viagemDesc.price}</span>
          </div>
          <p className="descricao">{viagemDesc.description}</p>
          <p className="vagas">
            {viagemDesc.vacancies} vagas ainda disponíveis
          </p>
          <div className="pessoas">
            <p>Quantidade de pessoas</p>
            <span>0</span>
          </div>
        </S.Info>
        <div className="containerBtn">
          <Button className="">
            <Link to="/carrinho">Comprar Pacote</Link>
          </Button>
        </div>
        <S.Dicas>
          <div className="iconName">
            <img src={Camping} alt="Icone" />
            <p>Hospedagem</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>{viagemDesc.accommodation}</p>
          </div>
          <div className="iconName">
            <img src={Mountain} alt="Icone" />
            <p>Atividades</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>{viagemDesc.activities}</p>
          </div>
          <div className="iconName">
            <img src={Calendar} alt="Icone" />
            <p>Datas</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>{viagemDesc.travelDate}</p>
          </div>
          <div className="iconName">
            <img src={Mapa} alt="Icone" />
            <p>Dicas de viagem</p>
          </div>
          <div className="containerDicas">
            <div className="barraV" />
            <p>{viagemDesc.hint}</p>
          </div>
        </S.Dicas>
      </S.Viagem>
      <Footer />
    </>
  );
};

export default Viagem;
