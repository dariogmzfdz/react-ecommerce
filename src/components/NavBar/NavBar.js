import { useState, useEffect, useRef } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useWishList } from "../../context/WishListContext";
import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from "../LogIn/LogIn.js";
import Profile from "../Profile/Profile.js";
import Logo from "../../assets/ghibli.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { isAuthenticated } = useAuth0();

  const { openCart, cartQuantity } = useShoppingCart();
  const { openWish, wishQuantity } = useWishList();
  return (
    <NavbarBs
      expand="sm"
      sticky="top"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "transparent" : "white",
      }}
    >
      <Container>
        <NavbarBs.Brand href="/">
          <img
            src={Logo}
            alt="logo"
            height="60"
            className="d-inline-block align-top"
          />
        </NavbarBs.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/movies" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        {wishQuantity > 0 && (
          <Button
            onClick={() => {
              scrollToTop();
              openWish();
            }}
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
              marginRight: "1rem",
            }}
            variant="btn btn-secondary"
            className="rounded-circle"
          >
            <FavoriteIcon />

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {wishQuantity}
            </div>
          </Button>
        )}
        {cartQuantity > 0 && (
          <Button
            onClick={() => {
              scrollToTop();
              openCart();
            }}
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
              marginRight: "1rem",
            }}
            variant="btn btn-secondary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
        <Nav style={{ width: "6rem", right: "3rem" }}>
          {isAuthenticated ? (
            <div className="profile">
              <Profile />
            </div>
          ) : (
            <LogInButton />
          )}
        </Nav>
      </Container>
    </NavbarBs>
  );
}
