import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./Header.module.scss";

import userImage from "./../../../images/header/user.svg";
import authImage from "./../../../images/header/dumbbell.svg";
import arrowImage from "./../../../images/header/arrow.svg";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { isAuth } = useAuth();

    return (
        <header className={styles.header}>
            {pathname !== "/" ? (
                <button type="button" onClick={() => navigate(-1)}>
                    <img
                        src={arrowImage}
                        width="29"
                        height="23"
                        alt="back"
                        draggable={false}
                    />
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() =>
                        isAuth ? navigate("/profile") : navigate("/auth")
                    }
                >
                    <img
                        src={isAuth ? authImage : userImage}
                        alt="Auth"
                        height="40"
                        width="40"
                        draggable={false}
                    />
                </button>
            )}

            <Hamburger />
        </header>
    );
};

export default Header;
