import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Viajante from "../../components/Viajante";
import RadioButton from "../../components/RadioButton";
import Form from "../../components/Form";
import Button from "../../components/Button";

import Arrow from "../../assets/icons/Arrow.svg";

import * as S from "./Checkout.style";

const Checkout = () => {
  return (
    <>
      <NavBar />
      <S.Checkout>
        <div className="checkoutName">
          <img src={Arrow} alt="Back Arrow" />
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
          <Form type="number">Nome impresso no cartão</Form>
          <div className="checkoutFormsSide">
            <Form type="number " className="small">
              Código
            </Form>
            <Form type="date" className="small">
              Validade
            </Form>
          </div>

          <Button>Finalizar compra</Button>
        </form>
      </S.Checkout>
      <Footer />
    </>
  );
};

export default Checkout;
