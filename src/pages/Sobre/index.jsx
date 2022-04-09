import Footer from "../../components/Footer";
import Form from "../../components/Form/Form";
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
          <h2>Sobre nós</h2>
          <img
            src={img1}
            alt="Homem de costas, com tom de chegando à uma nova aventura"
          />
          <p>
            A Cobé é uma empresa de turismo de base comunitária que tem como
            foco a experiência do viajante no local de destino. A viagem é toda
            planejada para que a pessoa participe do dia a dia da comunidade
            local, realizando as mesmas atividades que os moradores realizam,
            além de ter a oportunidade de conhecer os costumes da região.
          </p>
          <p>
            Geralmente o turista fica hospedado na casa de um morador da
            comunidade, faz as refeições junto com a família e participa da
            rotina de atividades com essa família. Ele pode aprender e ajudar
            com o plantio, a cozinha, trabalhando com peças de artesanado
            tradicionais na comunidade, entre várias outras atividades.
          </p>
          <p>
            A ideia é colocar as comunidades locais como protgonistas e promover
            um estilo de viagem sustentável, com respeito à natureza, às
            populações e à cultura.
          </p>
          <p>
            O nosso objetivo principal é ajudar comunidades rurais através do
            turismo, proporcionando desenvolvimento da economia das comunidades
            e valorização da cultura local.
          </p>
        </section>
        <div className="linha"></div>
        <section>
          <h2>Nosso propósito</h2>
          <img
            src={img2}
            alt="Homem segurando uma pequena escultura de um cavalo"
          />
          <p>
            A Cobé - turismo comunitário surgiu com um objetivo nenhum pouco
            modesto: erradicar a pobreza em comunidades rurais.
          </p>
          <p>
            Apesar de ser uma tarefa difícil, não é impossível e desistir nunca
            foi uma opção.
          </p>
          <p>
            Mas gostaríamos de criar uma solução que impactasse de forma sólida
            e duradoura, para que as comunidades consiguissem se desenvolver e
            manter esse crescimento através dos seus próprios recursos.
          </p>
          <p>
            Foi ai que decidimos incentivar o turismo comunitário no Brasil: é
            uma alternativa de renda para populações dessas comunidades, uma
            oportunidade de valorização da cultura local e uma forma de integrar
            os jovens ao modo de vida local.
          </p>
          <p>
            Esse tipo de atividade pode ajudar na meta de erradicação da
            pobreza, ajudando a movimentar a economia local, dando maior
            visibilidade para essas comunidades e proporcionando maior interesse
            pela cultura dessas pessoas.
          </p>
        </section>
      </S.sobreEmpresa>
      <Footer />
    </>
  );
};

export default Sobre;
