import styled from "styled-components";

export const Resumo = styled.section`
  padding: 30px 32px 20px;

  min-height: 95vh;

  h2 {
    display: block;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 400;
    margin-bottom: 30px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  div {
    display: flex;
    justify-content: center;
    .wpp {
      display: flex;
      align-items: top;
      justify-content: center;
      padding-bottom: 5px;
      div {
        margin-right: 8px;
      }
    }
  }
`;
