import styled from "styled-components";

export const cadastro = styled.main`
  padding: 40px 32px 60px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    align-items: center;
    h2 {
      align-items: flex-start;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-items: center;
    }
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 24px;
  }
  .senhaDica {
    color: ${({ theme }) => theme.colors.neutralDark};
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
  }
  .termos {
    margin-bottom: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  form {
    margin-bottom: 20px;
    .backgroundWhite {
      background-color: ${({ theme }) => theme.colors.neutralLight};
    }
  }
  .termos {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }

  .dificuldade {
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      margin-bottom: 2px;
    }
    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 120%;
      svg {
        margin-left: 12px;
      }
    }
  }
`;
