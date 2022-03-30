import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 8px;
  }
  input {
    width: 296px;
    height: 51px;
    font-size: 14px;
    border-radius: 10px;
    border: 1.6px solid ${({ theme }) => theme.colors.neutralMediumLight};
    padding-left: 10px;

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
