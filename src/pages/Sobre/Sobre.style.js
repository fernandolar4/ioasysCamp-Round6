import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";
import bgD from "../../assets/pattern/backgroundDesktop.svg";

export const sobreEmpresa = styled.main`
  padding: 40px 32px 40px;
  @media (min-width: 768px) {
    padding: 90px 100px 140px;
    padding: 90px 112px 400px;
    overflow-x: hidden;
    background-image: url(${bgD});
    background-position: 1%;
    background-repeat: repeat-y;
  }
  .containerBgB {
    position: absolute;
    margin-top: 0px;
    right: 0px;
    background-image: url(${pattern});
    height: 40px;
    width: 55%;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .containerSobre {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      img {
        width: 487px;
        height: 487px;
        margin-left: 100px;
      }
      h3 {
        font-weight: 600;
        font-size: 24px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
      }
      svg {
        height: 50px;
      }
    }
  }
  .containerObjetivo {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      h2 {
        display: none;
      }
      img {
        width: 487px;
        height: 487px;
        margin-right: 100px;
      }
    }
  }
  article {
    margin-bottom: 40px;
    .sobreSubtitulo {
      display: flex;
      align-items: center;

      svg {
        height: 100%;
        width: 5%;
        margin-right: 12px;
        margin-bottom: 8px;
      }
    }
  }

  section {
    margin-bottom: 40px;

    h2 {
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      color: ${({ theme }) => theme.colors.neutralDarker};
      @media (min-width: 768px) {
        font-weight: 600;
        font-size: 40px;
      }
    }

    img {
      display: flex;
      width: 296px;
      height: 300px;
      filter: drop-shadow(0px 2px 35px rgba(37, 42, 39, 0.1));
      border-radius: 20px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }

  .linha {
    margin-bottom: 40px;

    height: 1px;
    width: 80vw;
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
