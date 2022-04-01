import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as S from "./Viagem.style";

import Mock from "../../mock/pacotes.json";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Viagem = () => {
  return (
    <>
      <NavBar />
      <S.Viagem>
        <img src={Mock.pacotes[1].foto} alt="Foto do local" />
        <div>
          <span>{Mock.pacotes[1].nome}</span>
          <span>R${Mock.pacotes[1].valor}</span>
        </div>
        <p>X vagas ainda disponíveis</p>
        <Button className="secondary">
          <Link to="/resumo">Comprar Pacote</Link>
        </Button>
      </S.Viagem>
      <Footer />
    </>
  );
};

export default Viagem;
