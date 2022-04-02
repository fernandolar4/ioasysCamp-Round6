import * as S from "./Home.style";

import Button from "../../components/Button";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import placeholder from "../../assets/placeholder.png";
import mockup from "../../assets/mockMobile.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <S.Capa>
        <article>
          <h1>Turismo comunitário</h1>
          <p>como essa atividade pode ajudar a erradicar a pobreza</p>
        </article>
        <Button className="ghost">
          <Link to="/pacotes">Saiba como é possível</Link>
        </Button>
      </S.Capa>
      <S.Pacotes>
        <S.Subtitulo>Como são nossos pacotes de turismo?</S.Subtitulo>
        <S.Pacote>
          <img src={placeholder} alt="Pacote" />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </S.Pacote>
        <S.Pacote>
          <img src={placeholder} alt="Pacote" />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </S.Pacote>
        <S.Pacote>
          <img src={placeholder} alt="Pacote" />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </S.Pacote>
        <Button className="">
          <Link to="/pacotes">Conhecer pacotes</Link>
        </Button>
      </S.Pacotes>
      <S.Comunidades>
        <S.Subtitulo>Comunidades parceiras</S.Subtitulo>
        <Button className="disabled">
          <Link to="/pacotes">Button</Link>
        </Button>
      </S.Comunidades>
      <S.App>
        <h2>Baixe o nosso app no seu celular</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus{" "}
        </p>
        <div>
          <Button className="disabled small">App Store</Button>
          <Button className="disabled small">Google Play</Button>
        </div>
        <img alt="Mockup Celular" src={mockup} />
      </S.App>
      <Footer />
    </>
  );
};

export default Home;
