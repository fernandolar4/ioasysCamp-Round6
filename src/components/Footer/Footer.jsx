import * as S from "./Footer.style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <div className="containerBg"></div>
        <article>
          <h4>Cobé - turismo comunitário</h4>
          <Link to="/sobre">Sobre a empresa</Link>
          <Link to="/contato">Entre em contato</Link>
          <Link to="/faq">Dúvidas frequentes</Link>
          <Link to="/termos">Termos de uso</Link>
        </article>
        <div className="bottom">
          <div className="barra" />
          <p>Cobé - Turismo Comunitário © 2022</p>
          <div className="containerBg"></div>
        </div>
      </div>
    </S.Footer>
  );
};

export default Footer;
