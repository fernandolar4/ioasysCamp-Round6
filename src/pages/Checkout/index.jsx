import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import RadioButton from "../../components/RadioButton";
import Form from "../../components/Form";
import Button from "../../components/Button";

import Arrow from "../../assets/icons/Arrow.svg";

import * as S from "./Checkout.style";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar />
      <S.Checkout>
        <div className="checkoutName">
          <Link to="/carrinho">
            <img src={Arrow} alt="Back Arrow" />
          </Link>
          <h2>Checkout</h2>
        </div>
        <div className="checkoutTotal">
          <h3>Total a pagar</h3>
          <div>
            <h3>R$ XXX,XX</h3>
            <p>Em até 3x sem juros no cartão de crédito</p>
          </div>
        </div>
        <section className="formViajante">
          <h3>Viajante X</h3>
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
        </section>
        <h2>Pagamento</h2>
        <div className="checkoutRadio">
          <RadioButton name="checkout">Boleto</RadioButton>
          <RadioButton name="checkout">PIX</RadioButton>
          <RadioButton name="checkout">Cartão de crédito</RadioButton>
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Resumo da compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <div className="checkoutTotal">
              <p>Total a pagar</p>
              <div>
                <p>R$ XXX,XX</p>
                <p>Em até 3x sem juros no cartão de crédito</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
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
