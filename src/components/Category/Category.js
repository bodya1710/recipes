import React from 'react';
import {NavLink} from "react-router-dom";

import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiCroissant} from "react-icons/gi";

import css from "./Category.module.css";

const Category = () => {

    return (
        <div className={css.wrap_category}>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <p>Italian</p>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger/>
                <p>American</p>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles/>
                <p>Thai</p>
            </NavLink>
            <NavLink to={'/cuisine/French'}>
                <GiCroissant/>
                <p>French</p>
            </NavLink>
        </div>
    );
};
export {Category};