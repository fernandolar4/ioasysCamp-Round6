import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import * as S from "./Pacotes.style";

import { Link } from "react-router-dom";

import Mock from "../../mock/pacotes.json";

const Pacotes = () => {
  return (
    <>
      <NavBar />
      <S.Pacotes>
        <h2>Pacotes de Turismo</h2>
        <section>
          {Mock.pacotes.map((pacote) => (
            <Link to="/viagem">
              <div className="containerFoto">
                <img src={pacote.foto} alt="foto da localidade" />
                <div className="containerTexto">
                  <p>{pacote.nome}</p>
                  <p>R${pacote.valor}</p>
                </div>
              </div>
              <div className="containerBtn">
                <Button>Fazer Reserva</Button>
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
