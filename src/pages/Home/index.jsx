import * as S from "./Home.style";

import Button from "../../components/Button";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import placeholder from "../../assets/placeholder.png";
import mockup from "../../assets/mockMobile.png";
import Planta from "../../assets/icons/Planta.svg";
import Camping from "../../assets/icons/Camping.svg";
import Marcador from "../../assets/icons/Marcador.svg";
import img1 from "../../assets/comunidade.png";
import img2 from "../../assets/desenvolver.png";
import img3 from "../../assets/visao.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <S.containerHome>
        <S.Capa>
          <article>
            <h1>Turismo comunitário</h1>
            <p>essa atividade pode ajudar a erradicar a pobreza</p>
          </article>
          <div className="btn">
            <Button className="">
              <Link to="/sobre">Saber como</Link>
            </Button>
          </div>
        </S.Capa>

        <S.Pacotes>
          <S.Subtitulo>Como são nossos pacotes de turismo?</S.Subtitulo>
          <S.Parceiras>
            <div>
              <div className="iconName">
                <img src={Camping} alt="Icone" />
                <p>Hospede-se na comunidade</p>
              </div>
              <div className="containerParceiras">
                <div className="barraV" />
                <p className="textoParceira">
                  Fique hospedado na casa de um anfitrião morador local. Você
                  poderá participar de momentos únicos no dia a dia da
                  comunidade
                </p>
              </div>
            </div>
            <div>
              <div className="iconName">
                <img src={Planta} alt="Icone" />
                <p>Participe das atividades locais</p>
              </div>
              <div className="containerParceiras">
                <div className="barraV" />
                <p className="textoParceira">
                  Um dia de pesca, plantio da lavoura ou criar peças de
                  artesanato: participe das atividades que fazem parte da vida
                  da comunidade
                </p>
              </div>
            </div>
            <div>
              <div className="iconName">
                <img src={Marcador} alt="Icone" />
                <p>Movimente a economia local</p>
              </div>
              <div className="containerParceiras">
                <div className="barraV" />
                <p className="textoParceira">
                  Através das nossas viagens você ajuda fomentando o comércio
                  local e trazendo maior visibilidade para o trabalho das
                  comunidades
                </p>
              </div>
            </div>
          </S.Parceiras>
          <Button className="secondary">
            <Link to="/pacotes">Conheça nossos pacotes</Link>
          </Button>
        </S.Pacotes>
        <S.Barra />
        <S.Comunidades>
          <S.Subtitulo>Nosso propósito</S.Subtitulo>
          <div>
            <S.Comunidade>
              <img src={img1} alt="Pacote" />
              <h3>Resgatar comunidades</h3>
              <p>
                Procuramos por comunidades rurais em dificuldades financeiras
                principalmente no Norte e Nordeste do país
              </p>
            </S.Comunidade>
            <S.Comunidade>
              <img src={img2} alt="Pacote" />
              <h3>Proporcionar desenvolvimento</h3>
              <p>
                Queremos não somente oferecer doações, mas ajudar essas
                comunidades a se tornarem autossustentáveis
              </p>
            </S.Comunidade>
            <S.Comunidade>
              <img src={img3} alt="Pacote" />
              <h3>Gerar visibilidade</h3>
              <p>
                O objetivo é conseguir aumentar a visibilidade para essas
                comunidades, que antes nem em mapas podiam ser encontradas
              </p>
            </S.Comunidade>
          </div>
          <Button className="">
            <Link to="/sobre#proposito">Conhecer projeto</Link>
          </Button>
        </S.Comunidades>
        <S.Barra />
        <S.App>
          <div className="appParte1">
            <S.Subtitulo>Baixe o nosso app no seu celular</S.Subtitulo>
            <p>
              Baixe o aplicativo para iOS ou Android, conheça as histórias das
              nossas comunidades parceiras e veja o relatos de vários outros
              turistas.
            </p>
            <div className="appApps">
              <Button className="secondary small  ">
                <a href="https://www.apple.com/br/app-store/" target="blank">
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9228 0.0120105C14.8718 -0.0449895 13.0343 0.0345106 11.4353 1.77001C9.83629 3.50401 10.0823 5.49301 10.1183 5.54401C10.1543 5.59501 12.3983 5.67451 13.8308 3.65701C15.2633 1.63951 14.9738 0.0705105 14.9228 0.0120105ZM19.8938 17.6115C19.8218 17.4675 16.4063 15.7605 16.7243 12.4785C17.0423 9.19501 19.2368 8.29501 19.2713 8.19751C19.3058 8.10001 18.3758 7.01251 17.3903 6.46201C16.6667 6.07389 15.8659 5.85152 15.0458 5.81101C14.8838 5.80651 14.3213 5.66851 13.1648 5.98501C12.4028 6.19351 10.6853 6.86851 10.2128 6.89551C9.73879 6.92251 8.32879 6.11251 6.81229 5.89801C5.84179 5.71051 4.81279 6.09451 4.07629 6.39001C3.34129 6.68401 1.94329 7.52101 0.965291 9.74551C-0.0127089 11.9685 0.498791 15.4905 0.864791 16.5855C1.23079 17.679 1.80229 19.4715 2.77429 20.7795C3.63829 22.2555 4.78429 23.28 5.26279 23.628C5.74129 23.976 7.09129 24.207 8.02729 23.7285C8.78029 23.2665 10.1393 23.001 10.6763 23.0205C11.2118 23.04 12.2678 23.2515 13.3493 23.829C14.2058 24.1245 15.0158 24.0015 15.8273 23.6715C16.6388 23.34 17.8133 22.083 19.1843 19.5345C19.7048 18.3495 19.9418 17.709 19.8938 17.6115Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
              </Button>
              <Button className=" secondary small">
                <a href="https://play.google.com/store" target="blank">
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2483 10.983L3.90277 0.60975L17.0653 8.166L14.2483 10.983ZM1.20352 0C0.593773 0.31875 0.186523 0.9 0.186523 1.6545V22.3403C0.186523 23.0948 0.594523 23.676 1.20352 23.9948L13.232 11.9948L1.20352 0ZM21.134 10.575L18.3733 8.97675L15.2938 12L18.3733 15.0233L21.1903 13.425C22.034 12.7553 22.034 11.2455 21.134 10.575ZM3.90352 23.391L17.066 15.8348L14.249 13.0178L3.90352 23.391Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          <img alt="Mockup Celular" src={mockup} />
        </S.App>
      </S.containerHome>
      <Footer />
    </>
  );
};

export default Home;
