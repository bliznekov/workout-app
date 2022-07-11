import React from "react";
import Hamburger from "./Hamburger/Hamburger";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

import userImage from "./../../../images/header/user.svg";
import arrowImage from "./../../../images/header/arrow.svg";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            {pathname !== "/" ? (
                <button type="button" onClick={() => navigate(-1)}>
                    <img src={arrowImage} alt="back" />
                </button>
            ) : (
                <button type="button" onClick={() => navigate("/auth")}>
                    <img src={userImage} alt="Auth" />
                </button>
            )}

            <Hamburger />
        </header>
    );
};

export default Header;
