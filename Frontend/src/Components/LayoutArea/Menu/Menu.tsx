import { NavLink } from "react-router-dom";
import "./Menu.css";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            {/* <Container> */}

            <Nav className="">
                <Nav.Link to="/" as={NavLink}>home</Nav.Link>
                <span> | </span>
                <Nav.Link to="/list" as={NavLink}>שם קולנוע</Nav.Link>
                <span> | </span>

                <Nav.Link to="/search" as={NavLink}>חיפוש</Nav.Link>
                <span> | </span>

                <Nav.Link to="/register" as={NavLink}>הרשמה</Nav.Link>
                <span> | </span>

                <Nav.Link to="/login" as={NavLink}>התחבר</Nav.Link>

            </Nav>
            <Button style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-primary"
                className="rounded-circle">

            
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor">

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
              3
            </div>
        </Button>
            {/* </Container> */ }

    {/* <NavLink to="/list">שם קולנוע</NavLink>
            <span> | </span>
            <NavLink to="/search">חיפוש</NavLink>
            <span> | </span>
            <NavLink to="/register">הרשמה</NavLink>
            <span> | </span>
            <NavLink to="/login">התחבר </NavLink> */}

    {/* <NavLink to="/add">Add</NavLink> */ }
        </div >
    );
}

export default Menu;
