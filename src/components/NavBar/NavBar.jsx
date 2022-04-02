import * as S from "./NavBar.style";


import Hamburguer from "../../assets/icons/Hamburguer.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <S.NavBar>
      <ul>
        <li>
          <a href="/login">Sobre nós</a>
        </li>
        <li>
          <a href="/pacotes">Pacotes turísticos</a>
        </li>
        <li>
          <a href="/login">Contato</a>
        </li>
        <li>
          <a href="/login">Minha conta</a>
        </li>
      </ul>
      <div className="hamburguer">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      <a href="/login">
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="17" cy="7" r="6" fill="#F86624" />
          <path
            d="M16.4286 5.71436H3.5715C1.99354 5.71436 0.714355 6.99354 0.714355 8.5715V16.4286C0.714355 18.0066 1.99354 19.2858 3.5715 19.2858H16.4286C18.0066 19.2858 19.2858 18.0066 19.2858 16.4286V8.5715C19.2858 6.99354 18.0066 5.71436 16.4286 5.71436Z"
            stroke="#252A27"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.71436 19.2858V5.71436"
            stroke="#252A27"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.2856 19.2858V5.71436"
            stroke="#252A27"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.42871 5.71425C6.42871 4.76705 6.80499 3.85864 7.47476 3.18887C8.14453 2.5191 9.05294 2.14282 10.0001 2.14282C10.9473 2.14282 11.8557 2.5191 12.5255 3.18887C13.1953 3.85864 13.5716 4.76705 13.5716 5.71425"
            stroke="#252A27"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </S.NavBar>
  );
};

export default NavBar;
