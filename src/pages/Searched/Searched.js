import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {recipeService} from "../../service/recipe.service";
import {Loader, RecipeItem} from "../../components";
import css from "./Searched.module.css";

const Searched = () => {

    const {search} = useParams();

    const [recipes, setRecipes] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);


    useEffect(()=>{
        fetchRecipe();
    }, [search]);

    async function fetchRecipe() {
        setIsPostLoading(true)
        await recipeService.getSearch(search).then(recipe => {
                setRecipes(recipe.data.results);
        })
        setIsPostLoading(false);
    }

    return (
        <div>
            {isPostLoading && <div className={css.wrap_loader}><Loader/></div>}
            <div className={css.wrap_recipes_item}>
                {recipes.map(recipe => <RecipeItem key={recipe.id} recipe = {recipe}/>)}
            </div>

        </div>
    );
};

export {Searched};