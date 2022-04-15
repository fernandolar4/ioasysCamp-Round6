import styled from "styled-components";

export const RadioButton = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;



    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
      margin-right: 8px;
    }

    & + label:before {
      content: "";
      margin-right: 8px;
      
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: white;
      border: 1.6px solid black;
      border-radius: 50px;
    }

    &:hover + label:before {
      background: ${({ theme }) => theme.colors.primary};
      border: 1.6px solid transparent;
    }

    &:checked + label:before {
      background: transparent;
      border: 1.6px solid ${({ theme }) => theme.colors.primary};
    }

    &.disabled {
      color: ${({ theme }) => theme.colors.neutralMediumDark};
      pointer-events: none;
    }
    &.disabled + label {
      color: ${({ theme }) => theme.colors.neutralMediumDark};
      pointer-events: none;
    }

    &.disabled + label:before {
      border: 1.6px solid ${({ theme }) => theme.colors.neutralMediumDark};
      pointer-events: none;
    }

    &:checked + label:after {
      content: "";
      position: absolute;
      left: 2px;
      top: 3.5px;
      background: ${({ theme }) => theme.colors.primary};
      width: 16px;
      height: 16px;
      border-radius: 50px;
      
      
  }
`;
