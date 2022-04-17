import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as S from "./Viagem.style";

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

  const [viajantes, setViajantes] = useState(0);

  useEffect(() => {
    api
      .get(`/tours/${viagemID}`)
      .then((response) => setViagemDesc(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, []);

  function minusViajante() {
    if (viajantes > 0) {
      setViajantes(viajantes - 1);
    }
  }
  function plusViajante() {
    if (viajantes < viagemDesc.vacancies) {
      setViajantes(viajantes + 1);
    }
  }

  return (
    <>
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
            <div>
              <button
                onClick={(e) => {
                  minusViajante();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="9.5" stroke="#252A27" />
                  <path
                    d="M6.42773 10H13.0604"
                    stroke="#252A27"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <span>{viajantes}</span>
              <button
                onClick={(event) => {
                  plusViajante();
                }}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10.2852" cy="10" r="9.5" stroke="#252A27" />
                  <path
                    d="M10.2852 6.70312V13.3358"
                    stroke="#252A27"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.96875 10H13.6014"
                    stroke="#252A27"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
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
