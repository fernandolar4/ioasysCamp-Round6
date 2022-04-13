import styled from "styled-components";
import pattern from "../../assets/pattern/pattern.svg";

export const Pacotes = styled.section`
  padding: 35px 32px 20px;

  h2 {
    display: block;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.neutralDarker};
    font-weight: 600;
    margin-bottom: 42px;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    .containerBg {
      position: absolute;
      margin-top: -40px;
      left: 0px;
      background-image: url(${pattern});
      height: 80px;
      width: 85%;
    }
    .containerBgB {
      position: absolute;
      margin-top: -40px;
      right: 0px;
      background-image: url(${pattern});
      height: 80px;
      width: 85%;
    }

    a {
      text-decoration: none;
      .containerFoto {
        background-position: center;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;

        img {
          object-fit: cover;
          height: 214px;
          width: 75vw;
          margin-bottom: 20px;
          border-radius: 15px;

          filter: drop-shadow(0px 2px 20px rgb(37 42 39 / 0.2));
        }
        .containerTexto {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            color: ${({ theme }) => theme.colors.neutralDarker};
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }
        }
      }
      .containerBtn {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 64px;
      }
    }
  }
`;
