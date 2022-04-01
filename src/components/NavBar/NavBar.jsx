import * as S from "./NavBar.style";

import Cart from "../../assets/icons/Cart.svg";
import Hamburguer from "../../assets/icons/Hamburguer.svg";

const NavBar = () => {
  return (
    <S.NavBar>
      <ul>
        <li>
          <a href="/login">Sobre nós</a>
        </li>
        <li>
          <a href="/pacotes">Pacotes turísticos</a>
        </li>
        <li>
          <a href="/login">Contato</a>
        </li>
        <li>
          <a href="/login">Minha conta</a>
        </li>
      </ul>
      <div className="hamburguer">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <h1>Logo</h1>
      <a href="/login">
        <img src={Cart} alt="Carrinho de Compras"></img>
      </a>
    </S.NavBar>
  );
};

export default NavBar;
