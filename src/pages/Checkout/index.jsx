import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import RadioButton from "../../components/RadioButton";
import Form from "../../components/Form";
import Button from "../../components/Button";

import Arrow from "../../assets/icons/Arrow.svg";
import Camping from "../../assets/icons/Camping.svg";
import Card from "../../assets/icons/Card.svg";

import * as S from "./Checkout.style";
import { Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
  const [viagem, setViagem] = useState([]);
  const [pessoas, setPessoas] = useState(["0"]);
  const [arrayPessoas, setArrayPessoas] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      setViagem(location.state.viagem.viagem);
      setPessoas(location.state.pessoas.pessoas);
      setArrayPessoas(Array.from(Array(location.state.pessoas.pessoas).keys()));
    }
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {console.log(viagem)}
      <NavBar />
      <S.Checkout>
        <section>
          <div className="checkoutName">
            <Link to="/carrinho">
              <img src={Arrow} alt="Back Arrow" />
            </Link>
            <h2>Checkout</h2>
          </div>
          <div className="checkoutTotal">
            <h3>Total a pagar</h3>
            <div>
              <h3>R$ {viagem.price * pessoas}</h3>
              <p>Em até 3x sem juros no cartão de crédito</p>
            </div>
          </div>
        </section>
        <section className="containerCompras">
          <section className="containerViajantes">
            {arrayPessoas.map((e, index) => (
              <div className="formViajante">
                <h2>Viajante {index + 1}</h2>
                <Form type="text" placeholder="Maria Fernanda">
                  Nome
                </Form>
                <Form type="text" placeholder="Sales Souza">
                  Sobrenome
                </Form>
                <Form type="date" placeholder="01/01/1999">
                  Data de nascimento
                </Form>
                <Form type="email" placeholder="example@email.com">
                  E-mail
                </Form>
                <Form type="number" placeholder="000.000.000-00">
                  CPF
                </Form>
                <div className="linha"></div>
              </div>
            ))}
          </section>
          <div className="marginV"></div>
          <section className="containerPagamento">
            <h2>Pagamento</h2>
            <div className="checkoutRadio">
              <RadioButton name="checkout" value="Boleto">
                Boleto
              </RadioButton>
              <RadioButton name="checkout" value="PIX">
                PIX
              </RadioButton>
              <RadioButton name="checkout" value="Cartão de créditoIX">
                Cartão de crédito
              </RadioButton>
            </div>

            <form>
              <div className="checkoutParcelas">
                <label for="parcelas">Parcelar a compra</label>
                <select name="parcelas" id="parcelas">
                  <option value="0">À vista</option>
                  <option value="1">x1 Sem Juros</option>
                  <option value="2">x2 Sem Juros</option>
                  <option value="3">x3 Sem Juros</option>
                </select>
              </div>
              <Form type="number" placeholder="0000 0000 0000 0000">
                Número do cartão
              </Form>
              <Form type="number" placeholder="0000 0000 0000 0000">
                Maria F Sales Souza
              </Form>
              <div className="checkoutFormsSide">
                <Form type="number " placeholder="000" className="small">
                  Código
                </Form>
                <Form type="number" className="small" placeholder="01/27">
                  Validade
                </Form>
              </div>
            </form>

            <div onClick={handleShow} className="btnSend">
              <Button onClick={handleShow}>Finalizar compra</Button>
            </div>
          </section>
        </section>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Resumo da compra</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <S.containerModal>
              <div className="iconName">
                <img src={Camping} alt="Icone" />
                <p>{viagem.tourName}</p>
              </div>
              <div className="containerDicas">
                <div className="barraV" />
                <p>{viagem.accommodation}</p>
              </div>
              <div className="iconName">
                <img src={Card} alt="Icone" />
                <p>Forma de pagamento</p>
              </div>
              <div className="containerDicas">
                <div className="barraV" />
                <article>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce eget volutpat urna, in aliquam ipsum.{" "}
                  </p>
                  <p>
                    <span>Alterar forma de pagamento</span>
                  </p>
                </article>
              </div>
            </S.containerModal>
          </Modal.Body>
          <Modal.Footer>
            <S.totalFooterModal>
              <h3>Total a pagar</h3>
              <div>
                <h3>R$ {viagem.price * pessoas}</h3>
                <p>Em até 3x sem juros no cartão de crédito</p>
              </div>
            </S.totalFooterModal>
            <Button className="secondary">
              <Link to="/resumo">Confirmar compra</Link>
            </Button>
          </Modal.Footer>
        </Modal>
      </S.Checkout>
      <Footer />
    </>
  );
};

export default Checkout;
