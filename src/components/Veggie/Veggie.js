import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";

import {recipeService} from "../../service/recipe.service";
import {RecipeItem} from "../RecipeItem/RecipeItem";
import css from "./Veggie.module.css";

const Veggie = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        recipeService.getAllVeg().then(value =>{
            setRecipes(value.data.recipes);
        });

    },[]);

    return (
        <>
            <h2 className={css.title_slider}>Our Vegetarian Picks</h2>
            <Splide options={{
                perPage: 4,
                arrows: false,
                autoWidth: true,
                pagination: false,
                drag: 'free',
                gap: '25px',
            }}>
                {recipes.map(recipe =><SplideSlide key={recipe.id}><RecipeItem key={recipe.id} recipe={recipe}/></SplideSlide>)}
            </Splide>
        </>
    );
};

export {Veggie};