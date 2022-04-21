import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import * as S from "./Compras.style";

const Compras = () => {
  return (
    <>
      <NavBar />

      <S.Desenvolvimento>
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.15 11.25L28.3 5.7C28.6626 4.76032 29.3005 3.95205 30.1302 3.38106C30.96 2.81007 31.9428 2.50298 32.95 2.5H37.05C38.0572 2.50298 39.04 2.81007 39.8698 3.38106C40.6995 3.95205 41.3374 4.76032 41.7 5.7L43.85 11.25L51.15 15.45L57.05 14.55C58.0324 14.4167 59.0323 14.5784 59.9226 15.0146C60.8129 15.4509 61.5534 16.1419 62.05 17L64.05 20.5C64.5625 21.3717 64.7986 22.3784 64.7272 23.3871C64.6558 24.3958 64.2802 25.3592 63.65 26.15L60 30.8V39.2L63.75 43.85C64.3802 44.6408 64.7558 45.6042 64.8272 46.6129C64.8986 47.6216 64.6625 48.6283 64.15 49.5L62.15 53C61.6534 53.8581 60.9129 54.5491 60.0226 54.9854C59.1323 55.4216 58.1324 55.5833 57.15 55.45L51.25 54.55L43.95 58.75L41.8 64.3C41.4374 65.2397 40.7995 66.0479 39.9698 66.6189C39.14 67.1899 38.1572 67.497 37.15 67.5H32.95C31.9428 67.497 30.96 67.1899 30.1302 66.6189C29.3005 66.0479 28.6626 65.2397 28.3 64.3L26.15 58.75L18.85 54.55L12.95 55.45C11.9676 55.5833 10.9677 55.4216 10.0774 54.9854C9.18712 54.5491 8.44661 53.8581 7.95 53L5.95 49.5C5.4375 48.6283 5.20138 47.6216 5.2728 46.6129C5.34421 45.6042 5.7198 44.6408 6.35 43.85L10 39.2V30.8L6.25 26.15C5.6198 25.3592 5.24421 24.3958 5.1728 23.3871C5.10138 22.3784 5.3375 21.3717 5.85 20.5L7.85 17C8.34661 16.1419 9.08712 15.4509 9.97741 15.0146C10.8677 14.5784 11.8676 14.4167 12.85 14.55L18.75 15.45L26.15 11.25ZM25 35C25 36.9778 25.5865 38.9112 26.6853 40.5557C27.7841 42.2002 29.3459 43.4819 31.1732 44.2388C33.0004 44.9957 35.0111 45.1937 36.9509 44.8079C38.8907 44.422 40.6725 43.4696 42.0711 42.0711C43.4696 40.6725 44.422 38.8907 44.8079 36.9509C45.1937 35.0111 44.9957 33.0004 44.2388 31.1732C43.4819 29.3459 42.2002 27.7841 40.5557 26.6853C38.9112 25.5865 36.9778 25 35 25C32.3478 25 29.8043 26.0536 27.9289 27.9289C26.0536 29.8043 25 32.3478 25 35V35Z"
            fill="#F86624"
            stroke="#252A27"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2>Em Desenvolvimento</h2>
      </S.Desenvolvimento>
      <Footer />
    </>
  );
};

export default Compras;
