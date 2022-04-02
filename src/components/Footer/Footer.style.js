import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  padding: 34px 32px 13px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  color: ${({ theme }) => theme.colors.neutralLight};

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;

    h4 {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.neutralLighter};
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.neutralLighter};
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 17px;
    }
  }
  div {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.neutralLighter};
    width: 100%;
    margin-bottom: 12px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary.neutralLighter};
    font-size: 10px;
    font-weight: 400;
  }
`;
