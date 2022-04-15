import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import Camping from "../../assets/icons/Camping.svg";
import Lixo from "../../assets/icons/Lixo.svg";

import * as S from "./Carrinho.style";
import { Link } from "react-router-dom";

const Carrinho = () => {
  return (
    <>
      <NavBar />
      <S.Carrinho>
        <section>
          <div className="containerBgB"></div>
          <h2>Carrinho de compras</h2>
          <section className="carrinhoCard">
            <div className="carrinhoNome">
              <div className="carrinhoTitulo">
                <img src={Camping} alt="Icone" />
                <p>Mãos na argila!</p>
              </div>
              <p>R$ XXXX,XX</p>
            </div>
            <div className="carrinhoPessoas">
              <p>Quantidade de pessoas</p>
              <span>X</span>
            </div>
            <p className="carrinhoDesc">
              Lorem Ips dolor sit amet, consectetur adipiscing elit ut labore et
              dolor ut et dolor in so indent Lorem Ips dolor sit amet,
              consectetur adipiscing elit ut labore et dolor ut et dolor in so
              indent
            </p>
            <div className="carrinhoLinks">
              <Link to="/pacotes">Ver detalhes</Link>
              <button>
                <img src={Lixo} />
              </button>
            </div>
          </section>
        </section>
        <Button className="secondary btnPosition">
          <Link to="/checkout">Finalizar compra</Link>
        </Button>
      </S.Carrinho>
      <Footer />
    </>
  );
};

export default Carrinho;
