import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
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
              <div>
                <img src={pacote.foto} alt="foto da localidade" />
                <span>{pacote.nome}</span>
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
