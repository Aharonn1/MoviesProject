import { NavLink } from "react-router-dom";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Header.css";
import WhatInTheater from "../../DataArea/WhatInTheater/WhatInTheater";

function Header(): JSX.Element {
    return (
        <div className="Header">
            {/* <AuthMenu/> */}
            {/* {<WhatInTheater/>} */}
            <NavLink to="/whatInTheater">מה בקולנוע</NavLink>
            <span> | </span>
            <NavLink to="/blog">בלוג</NavLink>

        </div>
    );
}

export default Header;
