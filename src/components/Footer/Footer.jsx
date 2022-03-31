import * as S from "./Footer.style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Footer>
      <article>
        <h4>Cobé - turismo comunitário</h4>
        <Link to="/login">Sobre a empresa</Link>
        <Link to="/login">Entre em contato</Link>
        <Link to="/login">Dúvidas frequentes</Link>
        <Link to="/login">Termos de uso</Link>
      </article>
      <div />
      <p>Cobé - Turismo Comunitário © 2022</p>
    </S.Footer>
  );
};

export default Footer;
