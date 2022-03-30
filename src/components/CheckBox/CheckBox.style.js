import styled from "styled-components";

export const CheckBox = styled.div`
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
      border-radius: 6px;
    }

    &:hover + label:before {
      background: ${({ theme }) => theme.colors.primary};
      border: 2px solid transparent;
    }

    &:checked + label:before {
      background: ${({ theme }) => theme.colors.primary};
      border: 2px solid transparent;
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
      border: 2px solid ${({ theme }) => theme.colors.neutralMediumDark};
      pointer-events: none;
    }

    &:checked + label:after {
      content: "";
      position: absolute;
      left: 5px;
      top: 9px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
        4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg);
    }
  }
`;
