import React from 'react';

import css from "./RecipeItem.module.css";

const RecipeItem = ({recipe:{title, image, vegetarian, extendedIngredients}}) => {

    return (
        <div className={css.recipe_item}>
                <span><h4>{title}</h4></span>
                <img src={image} alt={title}/>
        </div>
    );
};

export {RecipeItem};