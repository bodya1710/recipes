import React, {useEffect, useState} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";


import {recipeService} from "../../service/recipe.service";
import {RecipeItem} from "../RecipeItem/RecipeItem";
import "@splidejs/splide/dist/css/splide.min.css";
import css from "./Popular.module.css";

const Popular = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        recipeService.getAll().then(value =>{
            setRecipes(value.data.recipes);
        });

    },[]);

    return (
        <>
            <h2 className={css.title_slider}>Trending</h2>
            <Splide
                options={{
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

export {Popular};