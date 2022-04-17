import styled from "styled-components";

export const Viagem = styled.section`
  padding: 31px 32px 30px;
  .breadcrumb {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.neutralDark};
    }
    a:hover,
    a:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
  .containerBtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const Info = styled.section`
  h5 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutralDark};
    margin-bottom: 22px;
  }
  img {
    margin-bottom: 40px;
    width: 100%;
    height: 360px;
    border-radius: 20px;
    object-fit: cover;
  }
  .nomeValor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 600;
    margin-bottom: 24px;
  }

  .descricao,
  .pessoas {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.neutralDark};
  }
  .vagas {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .pessoas {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 24px;
    div {
      display: flex;
      align-items: center;
      button {
        background-color: transparent;
        margin-right: 10px;
        margin-left: 10px;
        :hover {
          svg {
            fill: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }
`;

export const Dicas = styled.section`
  margin-top: 30px;

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

  .containerDicas {
    display: flex;
    flex-direction: row;
    .barraV {
      width: 1px;
      min-height: 90%;
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
