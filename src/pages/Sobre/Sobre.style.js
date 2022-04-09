import styled from "styled-components";

export const sobreEmpresa = styled.main`
  padding: 40px 32px 40px;

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
