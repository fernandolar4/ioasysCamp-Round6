import styled from "styled-components";
import bg from "../../assets/Background.png";
import bgD from "../../assets/pattern/backgroundDesktop.svg";

export const containerHome = styled.main`
  overflow-x: hidden;
  background-image: url(${bgD});
  background-position: 1%;
  background-repeat: repeat-y;
`;

export const Subtitulo = styled.h2`
  width: 257px;
  color: ${({ theme }) => theme.colors.neutralDarker};
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 48px;
  text-align: center;
  @media (min-width: 768px) {
    width: auto;

    font-weight: 600;
    font-size: 36px;
    margin-top: 120px;

    margin-bottom: 120px;
  }
`;

export const Capa = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 540px;
  width: 100%;
  border-radius: 0px 0px 20px 20px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 48px;

  padding: 100px 0px;

  article {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.neutralLight};
    text-align: center;
    h1 {
      font-weight: 600;
      font-size: 28px;
      margin-bottom: 4px;
    }
    p {
      width: 210px;
      font-weight: 400;
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    padding-left: 120px;

    article {
      margin-right: auto;
      text-align: left;
      align-items: flex-start;
      margin-bottom: 0px;
      h1 {
        font-weight: 600;
        font-size: 48px;
        line-height: 120%;
      }

      p {
        width: auto;

        font-size: 24px;
        margin-left: 0px;
      }
    }
    .btn {
      margin-top: -50px;
      margin-right: auto;
      padding: 0px;
    }
  }
`;

export const Comunidades = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 76px;
  @media (min-width: 768px) {
    div {
      width: 100vw;

      display: flex;

      h3 {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
      }
    }
  }
`;

export const Comunidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 17px;

  img {
    width: 200px;
    height: 220px;
    border-radius: 15px;
    margin-bottom: 31px;
    object-fit: cover;
    object-position: center;
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.neutralDarker};
    text-align: center;
  }
  p {
    width: 172px;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 48px;
    color: ${({ theme }) => theme.colors.neutralDark};
    text-align: center;
  }
`;

export const Pacotes = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 32px;
  margin-bottom: 70px;
`;

export const App = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    img {
      margin-left: 20%;
    }
  }
  .appParte1 {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .appApps {
    @media (min-width: 768px) {
      max-width: 500px;
    }
  }
  h2 {
    width: 178px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutralDarker};
    margin-bottom: 12px;
    @media (min-width: 768px) {
      width: 353px;
      text-align: left;
      font-weight: 600;
      font-size: 40px;
      line-height: 120%;
    }
  }
  p {
    width: 216px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    margin-bottom: 53px;
    @media (min-width: 768px) {
      width: 353px;
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
    }
  }
  div {
    width: 100%;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 53px;
  }
  img {
    margin-bottom: 53px;
  }
`;

export const Parceiras = styled.section`
  margin-bottom: 11px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  .iconName {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    @media (min-width: 768px) {
      flex-direction: column;
      justify-content: space-around;
      img {
        height: 90px;
        margin-bottom: 56px;
      }
    }
    img {
      margin-right: 12px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.neutralDarker};
      @media (min-width: 768px) {
        font-weight: 600;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .containerParceiras {
    display: flex;
    flex-direction: row;
    .barraV {
      width: 1px;
      height: 64px;
      background-color: ${({ theme }) => theme.colors.neutralMediumLight};
      margin-left: 10px;
      margin-right: 23px;
      margin-bottom: 19px;
      @media (min-width: 768px) {
        background-color: transparent;
        margin-bottom: 160px;
      }
    }
    p {
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.neutralDark};
    }
  }
`;

export const Barra = styled.div`
  width: 90vw;
  height: 1px;
  align-items: center;
  margin: 0px auto 54px;
  background-color: ${({ theme }) => theme.colors.neutralMediumLight};
`;
