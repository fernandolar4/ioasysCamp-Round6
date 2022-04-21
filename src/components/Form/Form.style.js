import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  filter: drop-shadow(0px 2px 10px rgba(37, 42, 39, 0.1));

  label {
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 8px;
    background-color: transparent !important;
  }
  input {
    background-color: white;
    width: 296px;
    height: 51px;
    font-size: 14px;
    border-radius: 10px;
    border: 1.6px solid ${({ theme }) => theme.colors.neutralMediumLight};
    padding-left: 10px;
    filter: drop-shadow(0px 2px 10px rgba(37, 42, 39, 0.1));
    @media (min-width: 768px) {
      width: 488px;
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.NeutralMediumLight};
    }

    :focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.primaryLight};
    }
    :invalid:focus {
      border: 2px solid ${({ theme }) => theme.colors.error};
    }
    &.disabled {
      background-color: ${({ theme }) => theme.colors.neutralMediumLight};
    }
    &.small {
      width: 138px;
      @media (min-width: 768px) {
        width: 244px;
      }
    }
  }
  .disabled {
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
