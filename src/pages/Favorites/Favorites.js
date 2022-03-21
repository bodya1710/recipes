import React, {useEffect, useState} from 'react';

import css from "./Favorites.module.css";
import {RecipeItem} from "../../components";

const Favorites = () => {

    const [recipes, setRecipes] = useState(null);

    const localFavoritesData = localStorage.getItem('popular');

    useEffect(()=>{
        if (localFavoritesData){
            const localData = JSON.parse(localFavoritesData);
            setRecipes(localData);
        }
    },[])

    return (
        recipes ? <div className={css.wrap_recipe_item}> {recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>)}</div>
                  : <div><h2>You dont have favorites</h2></div>
    );
};

export {Favorites};