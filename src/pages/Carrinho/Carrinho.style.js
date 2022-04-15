import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";

export const Carrinho = styled.main`
  padding: 40px 32px 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .containerBgB {
    position: absolute;
    margin-top: 0px;
    right: 0px;
    background-image: url(${pattern});
    height: 40px;
    width: 55%;
  }

  h2 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.neutralDarker};
    margin-bottom: 40px;
  }

  .carrinhoCard {
    padding: 16px 20px 18px;
    background: ${({ theme }) => theme.colors.neutralLight};
    box-shadow: 0px 2px 10px rgba(37, 42, 39, 0.2);
    border-radius: 20px;
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
