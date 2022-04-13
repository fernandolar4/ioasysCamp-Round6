import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import * as S from "./Pacotes.style";

import { Link } from "react-router-dom";

import Mock from "../../mock/pacotes.json";

const Pacotes = () => {
  const alternatingclass = ["containerBg", "containerBgB"];
  return (
    <>
      <NavBar />
      <S.Pacotes>
        <section>
          {Mock.pacotes.map((pacote, index) => (
            <Link to="/viagem">
              <h2>Pacotes de Turismo</h2>
              <div
                className={alternatingclass[index % alternatingclass.length]}
              ></div>
              <div className="containerFoto">
                <img src={pacote.foto} alt="foto da localidade" />
                <div className="containerTexto">
                  <p>{pacote.nome}</p>
                  <p>R${pacote.valor}</p>
                </div>
              </div>
              <div className="containerBtn ">
                <Button className="secondary">Ver pacote</Button>
              </div>
            </Link>
          ))}
        </section>
      </S.Pacotes>
      <Footer />
    </>
  );
};

export default Pacotes;
