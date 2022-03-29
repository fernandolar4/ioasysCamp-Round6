import * as S from "./Home.style";

import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <h1>Home Cobé</h1>
      <p>Padrao</p>
      <Button>Padrao</Button>
      <p>Pequeno</p>
      <Button className="small ">Pequeno</Button>
      <p>Secondary Pequeno</p>
      <Button className="small secondary">Secondary Pequeno</Button>
      <p>Fantasmatico</p>
      <Button className="ghost">Fantasmatico</Button>
      <p>Fantasmatico Indisponivel</p>
      <Button className="ghost disabled">Fantasmatico Indisponivel</Button>
      <p> Indisponivel Padrao</p>
      <Button className="disabled ">Indisponivel Padrao</Button>
    </>
  );
};

export default Home;
