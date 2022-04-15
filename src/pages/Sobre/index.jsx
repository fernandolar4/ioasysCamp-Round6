import Footer from "../../components/Footer";

import NavBar from "../../components/NavBar";
import * as S from "./Sobre.style";
import img1 from "../../assets/sobrenos.png";
import img2 from "../../assets/nossoproposito.png";

const Sobre = () => {
  return (
    <>
      <NavBar />
      <S.sobreEmpresa>
        <section>
          <div className="containerBgB"></div>
          <h2>Sobre nós</h2>
          <img
            src={img1}
            alt="Homem de costas, com tom de chegando à uma nova aventura"
          />
          <article>
            <div className="sobreSubtitulo">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8567 1.71423L1.71387 20.2857H20.2853L8.14244 1.71423"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Cobé </h3>
            </div>
            <p>
              A Cobé é uma empresa de turismo de base comunitária que tem como
              foco a experiência do viajante no local de destino. A viagem é
              toda planejada para que a pessoa participe do dia a dia da
              comunidade local, realizando as mesmas atividades que os moradores
              realizam, além de ter a oportunidade de conhecer os costumes da
              região.
            </p>
            <p>
              O nosso objetivo principal é ajudar comunidades rurais através do
              turismo, proporcionando desenvolvimento da economia das
              comunidades e valorização da cultura local.
            </p>
          </article>
          <article>
            <div className="sobreSubtitulo">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9996 20.2857C16.1279 20.2857 20.2853 16.1283 20.2853 10.9999C20.2853 5.87159 16.1279 1.71423 10.9996 1.71423C5.87122 1.71423 1.71387 5.87159 1.71387 10.9999C1.71387 16.1283 5.87122 20.2857 10.9996 20.2857Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.7143 15.9999L14.5714 7.42847L6 10.2856L9.57143 12.4285L11.7143 15.9999Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Como acontece?</h3>
            </div>
            <p>
              Geralmente o turista fica hospedado na casa de um morador da
              comunidade, faz as refeições junto com a família e participa da
              rotina de atividades com essa família. Ele pode aprender e ajudar
              com o plantio, a cozinha, trabalhando com peças de artesanado
              tradicionais na comunidade, entre várias outras atividades.
            </p>
            <p>
              A ideia é colocar as comunidades locais como protgonistas e
              promover um estilo de viagem sustentável, com respeito à natureza,
              às populações e à cultura.
            </p>
          </article>
        </section>
        <div className="linha" id="proposito"></div>
        <section>
          <div className="containerBgB"></div>
          <h2>Nosso propósito</h2>
          <img
            src={img2}
            alt="Homem segurando uma pequena escultura de um cavalo"
          />
          <article>
            <div className="sobreSubtitulo">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.2853 20.2857C7.25774 20.2857 8.85672 18.6867 8.85672 16.7143C8.85672 14.7418 7.25774 13.1429 5.2853 13.1429C3.31285 13.1429 1.71387 14.7418 1.71387 16.7143C1.71387 18.6867 3.31285 20.2857 5.2853 20.2857Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.85658 5.28572V3.14286C8.85658 2.76398 8.70607 2.40061 8.43817 2.13271C8.17026 1.8648 7.80689 1.71429 7.42801 1.71429H5.7423C5.40607 1.70817 5.07846 1.82087 4.81715 2.03253C4.55583 2.2442 4.37757 2.54126 4.31373 2.87143L1.78516 16"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.42773 8.85715H14.5706"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.85645 12.4286V16.7143"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.714 20.2857C18.6865 20.2857 20.2854 18.6867 20.2854 16.7143C20.2854 14.7418 18.6865 13.1429 16.714 13.1429C14.7416 13.1429 13.1426 14.7418 13.1426 16.7143C13.1426 18.6867 14.7416 20.2857 16.714 20.2857Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1426 5.28572V3.14286C13.1426 2.76398 13.2931 2.40061 13.561 2.13271C13.8289 1.8648 14.1923 1.71429 14.5711 1.71429H16.2569C16.5931 1.70817 16.9207 1.82087 17.182 2.03253C17.4433 2.2442 17.6216 2.54126 17.6854 2.87143L20.2426 16"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1426 12.4286V16.7143"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Objetivo</h3>
            </div>
            <p>
              A Cobé - turismo comunitário surgiu com um objetivo nenhum pouco
              modesto: erradicar a pobreza em comunidades rurais.
            </p>
            <p>
              Apesar de ser uma tarefa difícil, não é impossível e desistir
              nunca foi uma opção.
            </p>
            <p>
              Mas gostaríamos de criar uma solução que impactasse de forma
              sólida e duradoura, para que as comunidades consiguissem se
              desenvolver e manter esse crescimento através dos seus próprios
              recursos.
            </p>
          </article>
          <article>
            <div className="sobreSubtitulo">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57084 15.4002V18.2573C9.56714 18.3647 9.52186 18.4664 9.44456 18.5411C9.36727 18.6157 9.264 18.6574 9.15656 18.6573H6.15656C5.66328 18.5742 5.21675 18.3154 4.89941 17.9287"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.89958 17.943C4.89958 17.943 3.34244 16.5859 6.95672 12.9716H8.57101L6.15672 8.98587H1.71387L2.92815 10.543C2.92815 10.543 2.11387 10.6859 2.11387 11.8144C2.54097 14.05 3.49606 16.1512 4.89958 17.943V17.943Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7852 10.1001L17.8994 8.67157C17.9467 8.65071 17.9978 8.63994 18.0494 8.63994C18.1011 8.63994 18.1522 8.65071 18.1994 8.67157C18.2546 8.67803 18.3077 8.69678 18.3546 8.72645C18.4016 8.75612 18.4413 8.79595 18.4709 8.843L20.1137 11.3001C20.2119 11.4977 20.263 11.7153 20.263 11.9359C20.263 12.1564 20.2119 12.374 20.1137 12.5716"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.171 12.4286C20.171 12.4286 19.7139 14.2857 14.9853 13.8571V12.6143L12.2139 16.2429L14.8424 20.2857L14.9853 18.3857C14.9853 18.3857 15.5139 19.0286 16.4139 18.3857C17.9233 16.5742 19.1866 14.5712 20.171 12.4286V12.4286Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.21412 7.11429L5.28555 6.22858C5.19043 6.17943 5.11715 6.09646 5.08014 5.99599C5.04312 5.89552 5.04505 5.78484 5.08555 5.68572L6.71412 2.42858C6.82293 2.23574 6.97506 2.07083 7.15853 1.94687C7.34199 1.82291 7.55176 1.74329 7.77127 1.71429"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.77148 1.71444C7.77148 1.71444 9.52863 1.71444 11.7572 6.00015L10.6001 7.42872H15.4001L17.1001 2.94301L15.1001 3.55729C15.071 3.24733 14.9587 2.95097 14.7752 2.69952C14.5916 2.44807 14.3436 2.25086 14.0572 2.12872C13.0725 1.80275 12.036 1.66228 11.0001 1.71444H7.77148Z"
                  stroke="#F86624"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3>Como gera desenvolvimento?</h3>
            </div>
            <p>
              Foi ai que decidimos incentivar o turismo comunitário no Brasil: é
              uma alternativa de renda para populações dessas comunidades, uma
              oportunidade de valorização da cultura local e uma forma de
              integrar os jovens ao modo de vida local.
            </p>
            <p>
              Esse tipo de atividade pode ajudar na meta de erradicação da
              pobreza, ajudando a movimentar a economia local, dando maior
              visibilidade para essas comunidades e proporcionando maior
              interesse pela cultura dessas pessoas.
            </p>
          </article>
        </section>
      </S.sobreEmpresa>
      <Footer />
    </>
  );
};

export default Sobre;
