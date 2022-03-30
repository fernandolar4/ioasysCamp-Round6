import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.neutralLighter};
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  height: 52px;
  width: 290px;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  a {
    text-decoration: none;
    padding-top: 17px;
    display: block;
    height: 100%;
    color: ${({ theme }) => theme.colors.neutralLighter};
  }

  &.small {
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
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
    pointer-events: none;
  }

  &.ghost {
    border: 2px solid;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    :hover {
      color: ${({ theme }) => theme.colors.neutralLighter};
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
    &.disabled {
      color: ${({ theme }) => theme.colors.neutralMediumLight};
      pointer-events: none;
    }
  }
`;
