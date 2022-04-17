import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import * as S from "./Pacotes.style";
import api from "../../services/api";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Pacotes = () => {
  const alternatingclass = ["containerBg", "containerBgB"];

  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    api
      .get("/tours")
      .then((response) => setPacotes(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, []);

  return (
    <>
      <NavBar />
      <S.Pacotes>
        <h2>Pacotes de Turismo</h2>
        <section className="containerPacote">
          {pacotes.map((pacote, index) => (
            <Link to="/viagem" key={pacote.id} state={pacote.id}>
              <div className={alternatingclass[index % 2]}></div>
              <div className="containerFoto">
                <img src={pacote.photo1} alt="foto da localidade" />
                <div className="containerTexto">
                  <p>{pacote.tourName}</p>
                  <p>R${pacote.price}</p>
                </div>
              </div>
              <div className="containerBtn ">
                <Button className="secondary">Ver pacote</Button>
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
