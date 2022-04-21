import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Form from "../../components/Form";
import Button from "../../components/Button";
import imgContato from "../../assets/contato.png";

import * as S from "./Contato.style";

const Contato = () => {
  return (
    <>
      <NavBar />
      <S.Contato>
        <section className="containerMain">
          <div>
            <section>
              <div className="containerBgB"></div>
              <h2>Contato</h2>
              <p>
                Tem alguma dúvida sobre nossos pacotes ou nossa empresa? Envie
                uma mensagem e responderemos o mais breve possível:
              </p>
            </section>
            <form>
              <Form placeholder="Maria Fernanda">Nome</Form>
              <Form type="email" placeholder="exemplo@email.com">
                E-mail
              </Form>
              <div>
                <label for="textarea">Mensagem</label>
                <textarea
                  required
                  id="textarea"
                  name="textarea"
                  placeholder="Digite aqui sua mensagem"
                ></textarea>
              </div>
              <Button type="submit" className="secondary">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </section>
        <section className="containerImg">
          <img src={imgContato} />
        </section>
      </S.Contato>
      <Footer />
    </>
  );
};

export default Contato;
