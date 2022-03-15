import React, {useEffect, useState} from 'react';
import {recipeService} from "../../service/recipe.service";

import {Splide, SplideSlide} from "@splidejs/react-splide";
import {RecipeItem} from "../RecipeItem/RecipeItem";
import css from "./Dessert.module.css";

const Dessert = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        recipeService.getAllVeg().then(value =>{
            setRecipes(value.data.recipes);
        });

    },[]);

    return (
        <>
            <h2 className={css.title_slider}>Dessert</h2>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '35px',
            }}>
                {recipes.map(recipe =><SplideSlide key={recipe.id}><RecipeItem key={recipe.id} recipe={recipe}/></SplideSlide>)}
            </Splide>
        </>
    );
};

export {Dessert};