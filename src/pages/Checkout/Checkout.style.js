import styled from "styled-components";

export const Checkout = styled.main`
  padding: 40px 32px;
  .checkoutName {
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;

    a {
      margin-right: 10px;
      height: 6px;
    }
    h2 {
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
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

  .checkoutTotal {
    margin-bottom: 32px;

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
    margin-bottom: 32px;

    height: 1px;
    width: 80vw;
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
  }
`;
