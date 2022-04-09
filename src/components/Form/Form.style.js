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
    width: 296px;
    height: 51px;
    font-size: 14px;
    border-radius: 10px;
    border: 1.6px solid ${({ theme }) => theme.colors.neutralMediumLight};
    padding-left: 10px;
    filter: drop-shadow(0px 2px 10px rgba(37, 42, 39, 0.1));

    ::placeholder {
      color: ${({ theme }) => theme.colors.NeutralMediumLight};
    }

    :focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.primaryLight};
      ${"" /* CONFERIR A COR */}
    }
    &.disabled {
      background-color: ${({ theme }) => theme.colors.neutralMediumLight};
    }
  }
  .disabled {
    pointer-events: none;
  }
`;
