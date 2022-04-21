import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";
import bgD from "../../assets/pattern/backgroundDesktop.svg";

export const Contato = styled.main`
  padding: 40px 32px 100px;
  display: flex;
  @media (min-width: 992px) {
    padding: 90px 150px 250px;
    overflow-x: hidden;
    background-image: url(${bgD});
    background-position: 1%;
    background-repeat: repeat-y;
    display: flex;
    justify-content: space-around;
  }

  .containerMain {
    margin: 0 auto;

    @media (min-width: 992px) {
    }
  }

  .containerImg {
    img {
      display: none;
      @media (min-width: 992px) {
        margin: 0 50px;
        display: block;
        max-width: 487px;
        filter: drop-shadow(0px 2px 35px rgba(37, 42, 39, 0.1));
        border-radius: 50px;
      }
    }
  }
  .containerBgB {
    position: absolute;
    margin-top: 0px;
    right: 0px;
    background-image: url(${pattern});
    height: 40px;
    width: 55%;
    @media (min-width: 992px) {
      background-image: none;
    }
  }

  section {
    @media (min-width: 992px) {
      width: 488px;
    }

    h2 {
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      color: ${({ theme }) => theme.colors.neutralDarker};
      margin-bottom: 20px;
      max-width: 296px;
      @media (min-width: 992px) {
        max-width: 488px;
        font-weight: 600;
        font-size: 40px;
        line-height: 120%;
      }
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      max-width: 296px;
      @media (min-width: 992px) {
        max-width: 488px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    filter: drop-shadow(0px 2px 10px rgba(37, 42, 39, 0.1));

    label {
      color: ${({ theme }) => theme.colors.neutralDarker};
      font-weight: 400;
      font-size: 12px;
      margin-bottom: 8px;
      background-color: transparent !important;
    }
    textarea {
      background-color: white;
      width: 296px;
      padding: 5px;
      font-size: 14px;
      border-radius: 10px;
      border: 1.6px solid ${({ theme }) => theme.colors.neutralMediumLight};
      padding-left: 10px;
      filter: drop-shadow(0px 2px 10px rgba(37, 42, 39, 0.1));

      margin-bottom: 56px;
      @media (min-width: 768px) {
        width: 488px;
        margin-bottom: 72px;
      }

      :placeholder {
        color: ${({ theme }) => theme.colors.NeutralMediumLight};
      }
      :invalid:focus {
        border: 2px solid ${({ theme }) => theme.colors.error};
      }
      :focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.primaryLight};
      }
    }
  }
`;
