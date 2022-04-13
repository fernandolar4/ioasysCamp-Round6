import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: ${({ theme }) => theme.colors.neutralLighter};
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px 2px 20px rgba(37, 42, 39, 0.2);

  ${
    "" /* .lateral {
    background-image: url(${pattern});
    background-position: center top;
    height: 280px;
    width: 28px;
  }  */
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
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
    a:hover,
    a:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .barra {
      height: 1px;
      background-color: ${({ theme }) => theme.colors.neutralMediumDark};
      width: 164px;
      margin-bottom: 12px;
    }
    p {
      color: ${({ theme }) => theme.colors.primary.neutralDarker};
      font-size: 10px;
      font-weight: 400;
      margin-bottom: 12px;
    }
  }
  .containerBg {
    position: absolute;
    left: 0px;
    background-image: url(${pattern});
    height: 40px;
    width: 100%;
  }
`;
