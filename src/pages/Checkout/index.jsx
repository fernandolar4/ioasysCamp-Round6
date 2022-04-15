import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Viajante from "../../components/Viajante";
import RadioButton from "../../components/RadioButton";
import Form from "../../components/Form";
import Button from "../../components/Button";

import Arrow from "../../assets/icons/Arrow.svg";

import * as S from "./Checkout.style";
import { Dropdown } from "react-bootstrap";

const Checkout = () => {
  return (
    <>
      <NavBar />
      <S.Checkout>
        <div className="checkoutName">
          <img src={Arrow} />
          <h2>Checkout</h2>
        </div>
        <div className="checkoutTotal">
          <p>Total a pagar</p>
          <div>
            <p>R$ XXX,XX</p>
            <p>Em até 3x sem juros no cartão de crédito</p>
          </div>
        </div>
        <Viajante />
        <div className="linha"></div>
        <h2>Pagamento</h2>
        <form>
          <div>
            <RadioButton name="checkout">Boleto</RadioButton>
            <RadioButton name="checkout">PIX</RadioButton>
            <RadioButton name="checkout">Cartão de crédito</RadioButton>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Parcelar a compra
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">1x Sem Juros</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2x Sem Juros</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3x Sem Juros</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form type="number" placeholder="0000 0000 0000 0000">
            Número do cartão
          </Form>
          <Form type="number">Nome impresso no cartão</Form>
          <div>
            <Form type="number">Código</Form>
            <Form type="date">Validade</Form>
          </div>

          <Button>Finalizar compra</Button>
        </form>
      </S.Checkout>
      <Footer />
    </>
  );
};

export default Checkout;
