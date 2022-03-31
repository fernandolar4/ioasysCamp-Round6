import styled from "styled-components";

export const NavBar = styled.nav`
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.neutralLighter};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 22px 33px 22px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 39px;
    li {
      color: black;
      text-decoration: none;
      list-style: none;
    }
  }

  .hamburguer {
    display: none;
    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: black;
    }
    }
  }

  @media(max-width:768px){
      .hamburguer {
          display: block;
      }
      .hamburguer.active .bar:nth-child(2){
          opacity: 0;
      }
      .hamburguer.active .bar:nth-child(1){
          transform: translateY(8px) rotate(45deg)
      }
      .hamburguer.active .bar:nth-child(3){
          transform: translateY(-8px) rotate(-45deg)
      }

      ul{
          left: 100vw;
          top: 700px;
          gap: 0;
          flex-direction: column;
          width: 50%;
          text-align: center;
          transition: 0.3s;

          &:active{
            left: 0;
          }
  }

  }

  a {
    background-color: transparent;
    position: relative;
    text-decoration: none;
    color: black;

    &:after {
      content: "";
      padding: 24px;
      position: absolute;
      left: -15px;
      top: -15px;
    }
  }
`;
