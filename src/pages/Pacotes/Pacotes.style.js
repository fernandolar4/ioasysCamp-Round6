import styled from "styled-components";

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
    justify-content: space-around;
    @media (min-width: 345px) {
      justify-content: space-between;
    }
    a {
      text-decoration: none;
      div {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;

        img {
          object-fit: cover;
          height: 160px;
          width: 140px;
          margin-bottom: 20px;
          border-radius: 15px;

          filter: drop-shadow(0px 2px 20px rgb(37 42 39 / 0.2));
        }
        span {
          color: ${({ theme }) => theme.colors.neutralDarker};
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 50px;
          margin-left: 8px;
        }
      }
    }
  }
`;
