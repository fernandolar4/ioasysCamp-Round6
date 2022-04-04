import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.colors.neutralLight};
  padding: 34px 32px 13px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.neutralDarker};

  box-shadow: 0px 2px 30px rgba(37, 42, 39, 0.25);

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;

    h4 {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.neutralDarker};
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.neutralDarker};
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 17px;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
  div {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.neutralMediumDark};
    width: 164px;
    margin-bottom: 12px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary.neutralDarker};
    font-size: 10px;
    font-weight: 400;
  }
`;
