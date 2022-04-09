import styled from "styled-components";

export const NavStyles = styled.div`
  *,
  *::after,
  *::before {
    font-family: "Outfit", sans-serif;
  }

  #navbarContainer {
    box-shadow: 0px 5px 20px rgba(37, 42, 39, 0.2);
  }

  #linksOffscreen {
    color: ${({ theme }) => theme.colors.neutralDarker};
    padding-left: 32px;
    margin-bottom: 40px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`;
