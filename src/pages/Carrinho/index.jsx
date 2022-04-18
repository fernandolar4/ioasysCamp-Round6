import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Camping from "../../assets/icons/Camping.svg";
import Lixo from "../../assets/icons/Lixo.svg";

import * as S from "./Carrinho.style";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Carrinho = () => {
  const [viagem, setViagem] = useState({
    tourName: "Nenhuma viagem",
    price: 0,
    description: "Nenhuma viagem",
  });
  const [pessoas, setPessoas] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      setViagem(location.state.viagem.viagemDesc);
      setPessoas(location.state.viajantes.viajantes);
    }
  }, []);

  function minusPessoa() {
    if (pessoas > 0) {
      setPessoas(pessoas - 1);
    }
  }
  function plusPessoa() {
    if (pessoas < viagem.vacancies) {
      setPessoas(pessoas + 1);
    }
  }

  function alternatingclass() {
    if (pessoas === 0) return "disabled";
    else {
      return "secondary";
    }
  }

  return (
    <>
      <NavBar />
      <S.Carrinho>
        <section>
          <div className="containerBgB"></div>
          <h2>Carrinho de compras</h2>
          <section className="carrinhoCard">
            <img
              src={viagem.photo1}
              alt={viagem.description}
              className="imgPacote"
            ></img>
            <section className="carrinhoSection">
              <div className="carrinhoNome">
                <div className="carrinhoTitulo">
                  <img src={Camping} alt="Icone" />
                  <p> {viagem.tourName}</p>
                </div>
                <p>R$ {viagem.price * pessoas}</p>
              </div>
              <div className="carrinhoPessoas">
                <p>Quantidade de pessoas</p>
                <div>
                  <button
                    onClick={(e) => {
                      minusPessoa();
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
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span>{pessoas}</span>
                  <button
                    onClick={(event) => {
                      plusPessoa();
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
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.96875 10H13.6014"
                        stroke="#252A27"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="carrinhoDesc">{viagem.description}</p>
              <div className="carrinhoLinks">
                <Link to="/pacotes">Ver detalhes</Link>
                <button>
                  <img src={Lixo} />
                </button>
              </div>
            </section>
          </section>
        </section>
        <div className="btnPosition">
          <Button className={alternatingclass()}>
            <Link
              to="/checkout"
              state={{ viagem: { viagem }, pessoas: { pessoas } }}
            >
              Finalizar compra
            </Link>
          </Button>
        </div>
      </S.Carrinho>
      <Footer />
    </>
  );
};

export default Carrinho;
