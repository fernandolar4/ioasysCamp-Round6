import styled from "styled-components";

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 8px;
  color: #fcfcfc;
  width: 55px;
  height: 22px;
  border-radius: 10px;

  &.ghost {
    border: 1px solid;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
