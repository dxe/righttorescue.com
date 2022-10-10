import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
//@ts-ignore
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import PageLink from "next/link";

const SHRINK_OFFSET = 15;

export const MainNav = ({
  announcement,
  announcementPage,
  onPaddingUpdate,
}: {
  announcement?: string;
  announcementPage?: string;
  onPaddingUpdate: (paddingTop: number) => void;
}) => {
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

  const [navbarTopPadding, setNavbarTopPadding] = useState(0);
  const announcementBarRef = useRef<null | HTMLAnchorElement>(null);
  useEffect(() => {
    const updatePadding = () => {
      const newValue = announcementBarRef.current?.clientHeight ?? 0;
      setNavbarTopPadding(newValue);
      onPaddingUpdate(newValue);
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, [announcementBarRef.current?.clientHeight, onPaddingUpdate]);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className={`fixed-top ${shrink ? "navbar-shrink" : ""}`}
        id="mainNav"
        expanded={expanded}
        style={{ paddingTop: navbarTopPadding }}
      >
        {announcement && (
          <PageLink href={`/${announcementPage}`} passHref>
            <a
              style={{
                backgroundColor: "#3974bd",
                color: "white",
                position: "absolute",
                fontSize: "0.9rem",
                width: "100%",
                textAlign: "center",
                fontWeight: "700",
                top: 0,
                left: 0,
                padding: "5px 2px 5px 2px",
              }}
              ref={announcementBarRef}
            >
              {announcement}
            </a>
          </PageLink>
        )}
        <Container>
          <Navbar.Brand>
            <Link to="/" isNavLink={false}>
              <img
                id="logo"
                src="/img/logo.png"
                alt="DxE"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="sign" isNavLink={true} onClick={collapseNavbar}>
                Sign
              </Link>
              <Link to="cases" isNavLink={true} onClick={collapseNavbar}>
                Cases
              </Link>
              <Link to="support" isNavLink={true} onClick={collapseNavbar}>
                Donate
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Dummy div to allow easily scroll back to the top when brand logo is clicked */}
      <div id="after-nav" />
    </>
  );
};

// Link returns a ScrollLink (Link from "react-scroll") if on the homepage (to scroll within the page)
// or a PageLink (Link from "next/link") if not on the homepage (to go back to the homepage).
const Link = ({ to, isNavLink, children, onClick }: any) => {
  const router = useRouter();
  const [onHomepage, setOnHomepage] = useState(false);

  useEffect(() => {
    setOnHomepage(router.pathname === "/");
  }, [router.pathname]);

  if (onHomepage)
    return (
      <ScrollLink
        to={to === "/" ? "after-nav" : to}
        offset={-100}
        style={{ cursor: "pointer" }}
        smooth={true}
        activeClass={isNavLink ? "active" : ""}
        className={isNavLink ? "nav-link" : ""}
        spy={isNavLink}
        onClick={onClick}
      >
        {children}
      </ScrollLink>
    );

  return (
    <PageLink href={to === "/" ? to : `/#${to}`}>
      <a className={isNavLink ? "nav-link" : ""} onClick={onClick}>
        {children}
      </a>
    </PageLink>
  );
};
