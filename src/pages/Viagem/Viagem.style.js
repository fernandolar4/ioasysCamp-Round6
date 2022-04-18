import styled from "styled-components";

export const Viagem = styled.section`
  padding: 31px 32px 30px;
  @media (min-width: 768px) {
    padding: 92px 100px 92px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const LadoA = styled.section`
  @media (min-width: 768px) {
    width: 35vw;
  }
  .breadcrumb {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutralDark};
    margin-bottom: 22px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
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
  img {
    margin-bottom: 40px;
    width: 100%;
    height: 360px;
    border-radius: 20px;
    object-fit: cover;
    @media (min-width: 768px) {
      height: 720px;
    }
  }
`;

export const LadoB = styled.section`
  @media (min-width: 768px) {
    margin-top: 30px;
    width: 40vw;
  }
  .containerBtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 768px) {
      display: block;
      margin-bottom: 80px;
    }
  }
`;
export const Info = styled.section`
  .nomeValor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 600;
    margin-bottom: 24px;
    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 120%;
      margin-bottom: 52px;
    }
  }

  .descricao,
  .pessoas {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.neutralDark};
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 20px;
    }
  }
  .vagas {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 16px;
    @media (min-width: 768px) {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 39px;
    }
  }
  .pessoas {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 24px;
    @media (min-width: 768px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      margin-bottom: 64px;
    }
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
      @media (min-width: 768px) {
        font-size: 24px;
      }
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
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
