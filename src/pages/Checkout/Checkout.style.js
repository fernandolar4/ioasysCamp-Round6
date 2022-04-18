import styled from "styled-components";
import bgD from "../../assets/pattern/backgroundDesktop.svg";
import pattern from "../../assets/pattern/pattern.svg";

export const Checkout = styled.main`
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 90px 110px;

    overflow-x: hidden;
    background-image: url(${bgD});
    background-position: 1%;
    background-repeat: repeat-y;
  }
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
  section {
    @media (min-width: 768px) {
      display: flex;
      width: 100%;
    }
  }
  .checkoutName {
    display: flex;
    align-items: flex-start;
    margin-right: auto;
    margin-bottom: 32px;
    @media (min-width: 768px) {
      img {
        height: 40px;
        width: 40px;
      }
      a {
        font-weight: 600;
        font-size: 40px;
        line-height: 120%;
      }
    }

    a {
      margin-right: 10px;
      height: 6px;
    }
    h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      @media (min-width: 768px) {
        font-weight: 600;
        font-size: 40px;
        line-height: 120%;
      }
    }
  }
  .containerCompras {
    @media (min-width: 768px) {
      flex-direction: row;
      margin: 72px auto;
      width: 100vw;
      align-items: space-around;
    }
  }
  .containerViajantes {
    @media (min-width: 768px) {
      flex-direction: column;

      h2 {
        margin-right: 200px;
        font-weight: 600;
        font-size: 24px;
      }
      .formViajante {
        margin-bottom: 20px;
      }
    }
  }

  .containerPagamento {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      h2 {
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
  label {
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 8px;
  }
  select {
    background-color: ${({ theme }) => theme.colors.neutralLighter};
    width: 296px;
    height: 51px;
    font-size: 14px;
    border-radius: 10px;
    border: 1.6px solid ${({ theme }) => theme.colors.neutralMediumLight};
    padding-left: 10px;
    filter: drop-shadow(0px 2px 10px rgba(37, 42, 39, 0.1));
    margin-bottom: 16px;

    :focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.primaryLight};
    }
  }
  .formViajante {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
    }
  }
  .checkoutTotal {
    margin-bottom: 32px;
    background-image: url(${pattern});
    background-size: 60% auto;
    background-repeat: repeat-x;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 2px 35px rgba(37, 42, 39, 0.1);
    border-radius: 20px;
    width: 296px;
    height: 100px;
    color: ${({ theme }) => theme.colors.neutralLighter};
    display: flex;
    justify-content: space-between;
    padding: 20px;
    text-align: right;
    @media (min-width: 768px) {
      padding: 25px;
      width: 455.84px;
      height: 120px;
    }
    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      white-space: nowrap;
      @media (min-width: 768px) {
        font-size: 24px;
      }
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .checkoutRadio {
    display: flex;
    align-items: center;
  }

  .checkoutParcelas {
    display: flex;
    flex-direction: column;
  }

  .checkoutFormsSide {
    max-width: 297px;
    display: flex;
    justify-content: space-between;
  }

  .linha {
    margin-top: 32px;
    margin-bottom: 32px;

    height: 1px;
    width: 80vw;
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
    @media (min-width: 768px) {
      display: none;
    }
  }
  .btnSend {
    margin-top: 32px;
  }
`;

export const containerModal = styled.div`
  margin-top: 30px;

  .iconName {
    display: flex;
    align-items: flex-start;
    img {
      height: 20px;
      margin-right: 12px;
      margin-top: 3px;
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
      span {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const totalFooterModal = styled.div`
width: 100%;
margin-bottom: 32px;
display: flex;
justify-content: space-between;
padding: 20px;
text-align: right;
h3 {
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  white-space: nowrap;
}
p {
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
}
}
`;
