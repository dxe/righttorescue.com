import { Navbar, Container, Nav } from "react-bootstrap";
import Script from "next/script";
import { useEffect, useState } from "react";
//@ts-ignore
import { Link } from "react-scroll";

// TODO: ensure nav links work on home & other pages

const SHRINK_OFFSET = 15;

export const MainNav = ({ scrollspyElementsStatus }: any) => {
  const [shrink, setShrink] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (event: any) => {
    setShrink(window.scrollY > SHRINK_OFFSET);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const collapseNavbar = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className={`fixed-top ${shrink ? "navbar-shrink" : ""}`}
        id="mainNav"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="after-nav"
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <img id="logo" src="img/logo.png" alt="DxE" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                activeClass="active"
                className="nav-link"
                to="sign"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={collapseNavbar}
                style={{ cursor: "pointer" }}
              >
                Sign
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="cases"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={collapseNavbar}
                style={{ cursor: "pointer" }}
              >
                Cases
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="support"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={collapseNavbar}
                style={{ cursor: "pointer" }}
              >
                Donate
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
          strategy="afterInteractive"
        />
      </Navbar>
      {/* Dummy div to allow easily scroll back to the top when brand logo is clicked */}
      <div id="after-nav" />
    </>
  );
};
