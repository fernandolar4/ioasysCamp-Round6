import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Form from "../../components/Form";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";

import * as S from "./Cadastro.style";

const Cadastro = () => {
  return (
    <>
      <NavBar />
      <S.cadastro>
        <h2>Cadastro:</h2>
        <form className="formCadastro">
          <Form type="text" placeholder="Maria Fernanda">
            Nome
          </Form>
          <Form type="text" placeholder="Sales Souza">
            Sobrenome
          </Form>
          <Form
            type="date"
            placeholder="01/01/1999"
            className="backgroundWhite"
          >
            Data de nascimento
          </Form>
          <Form type="email" placeholder="example@email.com">
            E-mail
          </Form>
          <Form type="password" placeholder="••••••••••••">
            Senha
          </Form>
          <p className="senhaDica">
            A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma
            letra maiúscula e um número
          </p>
          <div className="termos">
            <CheckBox>
              Concordo com os <a>Termos de uso</a>
            </CheckBox>
          </div>
          <Button type="submit">Confirmar cadastro</Button>
        </form>
        <div className="dificuldade">
          <p>Está com dificuldades para realizar o cadastro?</p>
          <a href="https://web.whatsapp.com">
            Entre em contato{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.69873 7.17723C8.55275 7.10223 7.82552 6.74598 7.69025 6.69777C7.55499 6.64687 7.45588 6.62277 7.35811 6.77277C7.259 6.92143 6.97775 7.25223 6.88936 7.35268C6.80365 7.45179 6.71659 7.46384 6.57061 7.39018C5.70275 6.95625 5.13356 6.61607 4.56168 5.63438C4.41034 5.37321 4.71302 5.39196 4.99561 4.82812C5.04383 4.72902 5.01972 4.64464 4.98222 4.56964C4.94472 4.49464 4.65008 3.76875 4.52686 3.47277C4.40766 3.18482 4.28445 3.225 4.19472 3.21964C4.109 3.21429 4.01124 3.21429 3.91213 3.21429C3.81302 3.21429 3.65365 3.25179 3.51838 3.39777C3.38311 3.54643 3.00142 3.90402 3.00142 4.62991C3.00142 5.3558 3.53043 6.05893 3.60275 6.15804C3.67775 6.25714 4.64338 7.74643 6.12597 8.38795C7.06347 8.79241 7.43043 8.82723 7.89918 8.75759C8.18445 8.71473 8.77239 8.40134 8.89427 8.05446C9.01614 7.70893 9.01614 7.41295 8.97998 7.35134C8.94382 7.28571 8.84472 7.24821 8.69873 7.17723Z"
                fill="#F86624"
              />
              <path
                d="M11.534 3.675C11.2313 2.9558 10.7974 2.31027 10.2443 1.7558C9.69115 1.20268 9.04561 0.767411 8.32507 0.466071C7.58847 0.156696 6.80632 0 6.00007 0H5.97329C5.16168 0.00401786 4.37552 0.164732 3.63624 0.480804C2.9224 0.786161 2.28222 1.22009 1.73445 1.77321C1.18668 2.32634 0.756772 2.9692 0.459451 3.68571C0.151415 4.42768 -0.00394188 5.21652 7.59813e-05 6.02812C0.00409384 6.95759 0.226415 7.88036 0.642933 8.70536V10.7411C0.642933 11.0813 0.918826 11.3571 1.259 11.3571H3.29606C4.12106 11.7737 5.04382 11.996 5.97329 12H6.00141C6.80365 12 7.58177 11.8446 8.31436 11.5406C9.03088 11.242 9.67507 10.8134 10.2269 10.2656C10.78 9.71786 11.2153 9.07768 11.5193 8.36384C11.8353 7.62455 11.9961 6.83839 12.0001 6.02679C12.0041 5.21116 11.8461 4.41964 11.534 3.675ZM9.51034 9.54107C8.5715 10.4705 7.32597 10.9821 6.00007 10.9821H5.97731C5.16972 10.9781 4.36749 10.7772 3.659 10.3996L3.5465 10.3393H1.66079V8.45357L1.60052 8.34107C1.22284 7.63259 1.02195 6.83036 1.01793 6.02277C1.01258 4.6875 1.52284 3.43393 2.459 2.48973C3.39383 1.54554 4.64338 1.02321 5.97865 1.01786H6.00141C6.67106 1.01786 7.32061 1.14777 7.93266 1.40491C8.52998 1.65536 9.0657 2.01563 9.52641 2.47634C9.98579 2.93571 10.3474 3.47277 10.5978 4.07009C10.8577 4.68884 10.9876 5.34509 10.9849 6.02277C10.9769 7.3567 10.4532 8.60625 9.51034 9.54107Z"
                fill="#F86624"
              />
            </svg>
          </a>
        </div>
      </S.cadastro>
      <Footer />
    </>
  );
};

export default Cadastro;
