import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";

export const loginScreen = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 32px 0px;
  .containerBgB {
    position: absolute;
    margin-top: 0px;
    right: 0px;
    background-image: url(${pattern});
    height: 40px;
    width: 55%;
  }

  article {
    text-align: left;
    max-width: 300px;
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 120%;
    }
  }

  p,
  a {
    margin-top: 5px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
  }

  .click {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      cursor: pointer;
    }
  }
  .formulario {
    margin-bottom: 56px;
    div {
      display: flex;
      justify-content: flex-end;
    }
  }

  .conta {
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .linha {
    background-color: ${({ theme }) => theme.colors.neutralMediumLight};
    height: 1px;
    width: 90vw;
  }

  .loginOptions {
    padding: 20px 100px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 14px;
    }

    .loginOptionsIcons {
      display: flex;
    }
    a:first-child {
      margin-right: 40px;
    }
  }
`;
