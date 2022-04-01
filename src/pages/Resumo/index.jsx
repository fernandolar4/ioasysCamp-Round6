import { Button } from "../../components/Button/Button.style";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as S from "./Resumo.style";

const Resumo = () => {
  return (
    <>
      <NavBar />
      <S.Resumo>
        <h2>Sua compra foi efetuada com sucesso!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <div>
          <Button className="disabled">Conferir minhas viagens</Button>
        </div>
      </S.Resumo>
      <Footer />
    </>
  );
};

export default Resumo;
