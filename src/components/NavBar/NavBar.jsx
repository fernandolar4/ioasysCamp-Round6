import * as S from "./NavBar.style";

import Carrinho from "../../assets/icons/Cart.svg";

import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  return (
    <S.NavStyles>
      <Navbar bg="light" expand="false" sticky="top" id="navb">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav.Link href="/carrinho">
            <img src={Carrinho} alt="Carrinho" />
          </Nav.Link>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <S.NavStyles>
                  <Nav.Link id="linksOffscreen" className="teste" href="/sobre">
                    Sobre nós
                  </Nav.Link>
                  <Nav.Link id="linksOffscreen" href="/pacotes">
                    Pacotes turísticos
                  </Nav.Link>
                  <Nav.Link id="linksOffscreen" href="/login">
                    login
                  </Nav.Link>
                  <Nav.Link id="linksOffscreen" href="/cadastro">
                    cadastro
                  </Nav.Link>
                </S.NavStyles>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </S.NavStyles>
  );
};

export default NavBar;
