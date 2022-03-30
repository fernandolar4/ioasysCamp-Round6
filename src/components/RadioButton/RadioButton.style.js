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
    }

    & + label:before {
      content: "";
      margin-right: 8px;
      display: inline-block;
      vertical-align: text-top;
      width: 20px;
      height: 20px;
      background: white;
      border: 2px solid black;
      border-radius: 50px;
    }

    &:hover + label:before {
      background: ${({ theme }) => theme.colors.primary};
      border: 2px solid transparent;
    }

    &:checked + label:before {
      background: transparent;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }

    &.disabled {
      color: #acaead;
      pointer-events: none;
    }
    &.disabled + label {
      color: #acaead;
      pointer-events: none;
    }

    &.disabled + label:before {
      border: 2px solid #acaead;
      pointer-events: none;
    }

    &:checked + label:after {
      content: "";
      position: absolute;
      left: 4px;
      top: 4px;
      background: ${({ theme }) => theme.colors.primary};
      width: 12px;
      height: 12px;
      border-radius: 50px;
      
      
  }
`;
