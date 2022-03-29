import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fcfcfc;
  font-weight: 600;
  font-size: 16px;
  padding: 17px 124px;
  border-radius: 15px;
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
  }

  &.small {
    font-size: 14px;
    padding: 15px 49px;
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
    :hover {
      background-color: ${({ theme }) => theme.colors.secondaryDarker};
    }
  }

  &.disabled {
    background-color: #e5e5e5;
  }

  &.ghost {
    background-color: transparent;
    border: 3px solid;
    color: ${({ theme }) => theme.colors.primary};
    &.disabled {
      color: #e5e5e5;
    }
  }
`;
