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
    justify-content: space-between;
    flex-wrap: wrap;

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
