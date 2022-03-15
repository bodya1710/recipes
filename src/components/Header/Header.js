import React from 'react';

import css from "./Header.module.css";
import logo from "../../img/cooking.png"
import {NavLink} from "react-router-dom";
import {MdFavorite} from "react-icons/md";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/'} className={css.logo_containner}>
                <img src={logo} alt="logo"/>
                <p>Your best recipes</p>
            </NavLink>
            <div className={css.favorites_container}>
                <NavLink to={'/favorites'}>
                    <MdFavorite/>
                </NavLink>
                <p>My favorites</p>

            </div>
        </div>
    );
};

export {Header};