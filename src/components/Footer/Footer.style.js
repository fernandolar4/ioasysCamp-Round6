import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.colors.neutralMediumLight};
  padding: 34px 32px 13px;

  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;
    h4 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    a {
      color: black;
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 17px;
    }
  }
  div {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.neutralMediumDark};
    width: 100%;
    margin-bottom: 12px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
`;
