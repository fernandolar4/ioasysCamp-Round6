import styled from "styled-components";

export const Checkout = styled.main`
  label {
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 8px;
    background-color: transparent;
  }
  select {
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

  .checkoutParcelas {
    display: flex;
    flex-direction: column;
  }

  .checkoutFormsSide {
    display: flex;
  }

  .linha {
    margin-bottom: 32px;

    height: 1px;
    width: 80vw;
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
  }
`;
