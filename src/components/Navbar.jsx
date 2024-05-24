import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const NavbarComp = () => {
  const [isUserLogged, setIsUserLogged] = useState(
    localStorage.getItem("access-token") ? true : false
  );
  const onLogOut = () => {
    window.location.href = "/";
    localStorage.removeItem("access-token");

    setIsUserLogged(false);
  };
  return (
    <>
      <Navbar
        style={{ backgroundColor: "var(--quaternary-color)" }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <MDBIcon
              style={{ fontSize: "1.2rem", marginRight: ".5rem" }}
              icon="earth"
            />
            Green Planet
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/steps">Steps</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            {isUserLogged ? (
              <>
                <Nav.Link href="/add-product">Add Product</Nav.Link>
                <Nav.Link
                  onClick={onLogOut}
                  style={{ marginLeft: "auto", marginRight: "1vw" }}
                >
                  Log out
                </Nav.Link>
                <Nav.Link
                  href="/cart"
                  style={{
                    fontSize: "1.5rem",
                    padding: "0",
                    marginRight: "1vw",
                  }}
                >
                  {<FaShoppingCart />}
                </Nav.Link>
                <Nav.Link
                  href="/profile"
                  style={{ fontSize: "1.3rem", padding: "0" }}
                >
                  <FaUser />
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/signin" style={{ marginLeft: "auto" }}>
                Sign in
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
