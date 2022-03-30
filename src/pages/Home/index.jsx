import * as S from "./Home.style";

import Button from "../../components/Button";
import Tag from "../../components/Tag";
import CheckBox from "../../components/CheckBox";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Cobé</h1>
      <h2>Botoes</h2>
      <p>Padrao</p>
      <Button>
        <Link to="/login">Padrao</Link>
      </Button>
      <p>Login Pequeno</p>
      <Button className="small ">
        <Link to="/login">Login</Link>
      </Button>
      <p>Secondary Pequeno</p>
      <Button className="small secondary">Secondary Pequeno</Button>
      <p>Fantasmatico</p>
      <Button className="ghost">Fantasmatico</Button>
      <p>Fantasmatico P</p>
      <Button className="ghost small">Fantasmatico P</Button>
      <p>Fantasmatico Indisponivel</p>
      <Button className="ghost disabled">Fantasmatico Indisponivel</Button>
      <p> Indisponivel Padrao</p>
      <Button className="disabled ">Indisponivel Padrao</Button>
      <h2>Tags</h2>
      <p> Tag 1</p>
      <Tag>Tag Aqui</Tag>
      <p> Tag 2</p>
      <Tag className="ghost">Tag Aqui</Tag>
      <h2>Checkbox</h2>

      <CheckBox>Abacaxi</CheckBox>
      <CheckBox className="disabled">maça</CheckBox>
    </>
  );
};

export default Home;
