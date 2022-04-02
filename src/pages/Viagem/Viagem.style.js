import styled from "styled-components";

export const Viagem = styled.section`
  padding: 35px 32px 20px;
`;
export const Info = styled.section`
  h2 {
    display: block;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 600;
    margin-bottom: 42px;
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
