import styled from "styled-components";
import bg from "../../assets/Background.png";

export const Subtitulo = styled.h2`
  width: 257px;
  color: ${({ theme }) => theme.colors.neutralDarker};
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 48px;
  text-align: center;
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
`;

export const Comunidades = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 76px;
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
  h2 {
    width: 178px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutralDarker};
    margin-bottom: 12px;
  }
  p {
    width: 216px;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    margin-bottom: 53px;
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
  .iconName {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    img {
      margin-right: 12px;
    }
    p {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.neutralDarker};
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
