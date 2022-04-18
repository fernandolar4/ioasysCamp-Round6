import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";
import bgD from "../../assets/pattern/backgroundDesktop.svg";

export const Carrinho = styled.main`
  padding: 40px 32px 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
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
      background-image: none;
    }
  }

  h2 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.neutralDarker};
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-weight: 600;
      font-size: 40px;
      line-height: 120%;
      margin-left: 10vw;
    }
  }

  .carrinhoCard {
    padding: 16px 20px 18px;
    background: ${({ theme }) => theme.colors.neutralLight};
    box-shadow: 0px 2px 10px rgba(37, 42, 39, 0.2);
    border-radius: 20px;
    @media (min-width: 768px) {
      width: 80vw;
      margin: 0 auto;
      display: flex;
    }

    .imgPacote {
      display: none;
      @media (min-width: 768px) {
        display: block;
        width: 216px;
        height: 216px;
        box-shadow: 0px 2px 35px rgba(37, 42, 39, 0.1);
        border-radius: 20px;
      }
    }

    .carrinhoSection {
      @media (min-width: 768px) {
        margin-left: 60px;
        img {
          display: none;
        }
        .carrinhoNome {
          font-weight: 600;
          font-size: 32px;
          line-height: 120%;
          .carrinhoTitulo {
            p {
              font-weight: 600;
              font-size: 24px;
              line-height: 120%;
            }
          }
        }
      }
    }
    .carrinhoNome {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .carrinhoTitulo {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        p {
          color: ${({ theme }) => theme.colors.neutralDarker};
          font-weight: 600;
          font-size: 16px;
          line-height: 120%;
        }
        img {
          margin-right: 10px;
        }
      }
    }
    .carrinhoPessoas {
      font-size: 14px;
      display: flex;
      align-items: flex-start;
      span {
        margin-left: 10px;
      }

      div {
        display: flex;
        align-items: center;
        button {
          background-color: transparent;

          margin-left: 10px;
          :hover {
            svg {
              fill: ${({ theme }) => theme.colors.primary};
            }
          }
        }
      }
    }
    .carrinhoDesc {
      font-size: 14px;
    }

    .carrinhoPessoas,
    .carrinhoLinks {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .carrinhoLinks {
      a {
        font-weight: 600;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
      img {
        height: 20px;
      }
    }
  }

  .btnPosition {
    margin: 0px auto;
  }
`;
