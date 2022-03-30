import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.NeutralLighter};
  font-weight: 600;
  font-size: 16px;
  height: 54px;
  border-radius: 15px;
  width: 296px;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  a {
    text-decoration: none;
    padding-top: 17px;
    display: block;
    height: 100%;
    color: ${({ theme }) => theme.colors.NeutralLighter};
  }

  &.small {
    font-size: 14px;
    height: 48px;
    width: 140px;
    a {
      padding-top: 15px;
    }
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
    :hover {
      background-color: ${({ theme }) => theme.colors.secondaryDarker};
    }
  }

  &.disabled {
    background-color: ${({ theme }) => theme.colors.NeutralMediumLight};
    pointer-events: none;
  }

  &.ghost {
    border: 2px solid;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    :hover {
      color: ${({ theme }) => theme.colors.NeutralLighter};
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
    &.disabled {
      color: ${({ theme }) => theme.colors.NeutralMediumLight};
      pointer-events: none;
    }
  }
`;
