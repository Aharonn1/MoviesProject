import { useEffect, useState } from "react";
import UserModel from "../../../Models/user-model";
import "./AuthMenu.css";
import { authStore } from "../../../Redux/AuthRedux";
import authService from "../../../Services/auth-service";
import { NavLink } from "react-router-dom";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(() => {

        setUser(authStore.getState().user);

        // Listen to AuthState changes:
        authStore.subscribe(() => {
            setUser(authStore.getState().user);
        });

    }, []);

    function logout(): void {
        authService.logout();
    }

    return (
        <div className="AuthMenu">

            {!user && <>

                <span>Hello Guest | </span>

                <NavLink to="/login">Login</NavLink>

                <span> | </span>

                <NavLink to="/register">Register</NavLink>

            </>}

            {user && <>

                <span>Hello {user.firstName} {user.lastName} | </span>

                <NavLink to="/home" onClick={logout}>Logout</NavLink>

            </>}
        </div>
    );
}

export default AuthMenu;
