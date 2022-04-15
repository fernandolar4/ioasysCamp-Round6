import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";

export const sobreEmpresa = styled.main`
  padding: 40px 32px 40px;

  .containerBgB {
    position: absolute;
    margin-top: 0px;
    right: 0px;
    background-image: url(${pattern});
    height: 40px;
    width: 55%;
  }

  article {
    margin-bottom: 40px;
    .sobreSubtitulo {
      display: flex;
      align-items: center;

      svg {
        height: 20px;
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
    }

    img {
      width: 296px;
      height: 300px;
      filter: drop-shadow(0px 2px 35px rgba(37, 42, 39, 0.1));
      border-radius: 20px;
      margin-bottom: 40px;
    }
  }

  .linha {
    margin-bottom: 40px;

    height: 1px;
    width: 80vw;
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
  }
`;
