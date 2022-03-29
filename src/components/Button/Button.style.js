import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fcfcfc;
  font-weight: 600;
  font-size: 16px;
  padding: 17px 0px;
  border-radius: 15px;
  width: 296px;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
  }

  &.small {
    font-size: 14px;
    padding: 15px 0px;
    width: 140px;
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
    :hover {
      background-color: ${({ theme }) => theme.colors.secondaryDarker};
    }
  }

  &.disabled {
    background-color: #e5e5e5;
    pointer-events: none;
  }

  &.ghost {
    background-color: transparent;
    border: 3px solid;
    color: ${({ theme }) => theme.colors.primary};
    :hover {
      color: #fcfcfc;
      background-color: ${({ theme }) => theme.colors.primaryDarker};
    }
    &.disabled {
      color: #e5e5e5;
      pointer-events: none;
    }
  }
`;
