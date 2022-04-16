import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Form from "../../components/Form";
import Button from "../../components/Button";

import * as S from "./Login.style";

const Login = () => {
  return (
    <>
      <NavBar />
      <S.loginScreen>
        <div className="containerBgB"></div>
        <article>
          <h2>Login</h2>
          <p>Você ainda não está conectado!</p>
        </article>
        <div className="formulario">
          <Form type="email" placeholder="exemplo@email.com">
            E-mail
          </Form>
          <Form type="password" placeholder="••••••••••••">
            Senha
          </Form>
          <div>
            <a className="click dica">Esqueci a minha senha</a>
          </div>
        </div>
        <Button>Entrar na minha conta</Button>

        <p className="conta">
          Não possui uma conta ainda? <a className="click">Criar conta</a>
        </p>

        <div className="linha" />
        <section className="loginOptions">
          <p>Acessar com:</p>
          <div className="loginOptionsIcons">
            <a>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 20.1117C0 30.055 7.22167 38.3233 16.6667 40V25.555H11.6667V20H16.6667V15.555C16.6667 10.555 19.8883 7.77833 24.445 7.77833C25.8883 7.77833 27.445 8 28.8883 8.22167V13.3333H26.3333C23.8883 13.3333 23.3333 14.555 23.3333 16.1117V20H28.6667L27.7783 25.555H23.3333V40C32.7783 38.3233 40 30.0567 40 20.1117C40 9.05 31 0 20 0C9 0 0 9.05 0 20.1117Z"
                  fill="#1877F2"
                />
              </svg>
            </a>
            <a>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.8663 16.2597H34.5238V16.1905H19.5238V22.8572H28.943C27.5688 26.738 23.8763 29.5238 19.5238 29.5238C14.0013 29.5238 9.52384 25.0463 9.52384 19.5238C9.52384 14.0013 14.0013 9.52384 19.5238 9.52384C22.073 9.52384 24.3922 10.4855 26.158 12.0563L30.8722 7.34218C27.8955 4.56801 23.9138 2.85718 19.5238 2.85718C10.3197 2.85718 2.85718 10.3197 2.85718 19.5238C2.85718 28.728 10.3197 36.1905 19.5238 36.1905C28.728 36.1905 36.1905 28.728 36.1905 19.5238C36.1905 18.4063 36.0755 17.3155 35.8663 16.2597Z"
                  fill="#FFC107"
                />
                <path
                  d="M4.77881 11.7663L10.2546 15.7822C11.7363 12.1138 15.3246 9.52384 19.5238 9.52384C22.073 9.52384 24.3921 10.4855 26.158 12.0563L30.8721 7.34218C27.8955 4.56801 23.9138 2.85718 19.5238 2.85718C13.1221 2.85718 7.57047 6.47134 4.77881 11.7663Z"
                  fill="#FF3D00"
                />
                <path
                  d="M19.524 36.1904C23.829 36.1904 27.7407 34.5429 30.6982 31.8638L25.5398 27.4988C23.8103 28.8141 21.6969 29.5255 19.524 29.5238C15.189 29.5238 11.5082 26.7596 10.1215 22.9021L4.68652 27.0896C7.44486 32.4871 13.0465 36.1904 19.524 36.1904Z"
                  fill="#4CAF50"
                />
                <path
                  d="M35.8664 16.2598H34.5239V16.1907H19.5239V22.8573H28.9431C28.2858 24.7044 27.1017 26.3183 25.5373 27.4998L25.5398 27.4982L30.6981 31.8632C30.3331 32.1948 36.1906 27.8573 36.1906 19.524C36.1906 18.4065 36.0756 17.3157 35.8664 16.2598Z"
                  fill="#1976D2"
                />
              </svg>
            </a>
          </div>
        </section>
      </S.loginScreen>
      <Footer />
    </>
  );
};

export default Login;
