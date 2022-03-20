import React from 'react';

import css from "./RecipeItem.module.css";
import {NavLink} from "react-router-dom";

const RecipeItem = ({recipe:{id,title, image, vegetarian, extendedIngredients}}) => {

    return (
        <NavLink to={`/recipe/${id}`} className={css.recipe_item}>
                <span><h4>{title}</h4></span>
                <img src={image} alt=''/>
        </NavLink>
    );
};

export {RecipeItem};