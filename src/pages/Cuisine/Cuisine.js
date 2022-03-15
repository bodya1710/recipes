import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";

import {Category, RecipeItem} from "../../components";
import {recipeService} from "../../service/recipe.service";
import css from "./Cuisine.module.css";
import {Loader} from "../../components/UI/Loader/Loader";

const Cuisine = () => {
    const lastElement = useRef();
    const observer = useRef();
    const {type} = useParams();

    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [params, setParams] = useState(type);

    useEffect(()=>{
        fetchRecipe();
    }, [type, page])

    useEffect(()=>{
        if (isPostLoading) return;
        if (observer.current) observer.current.disconnect();
        let callback = function(entries, observer) {
            if(entries[0].isIntersecting){
                setPage(page + 1);
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current);
    }, [isPostLoading])

    async function fetchRecipe() {
        setIsPostLoading(true)
        await recipeService.getAllLocal(type).then(recipe => {
            let data = recipe.data.recipes;
            if (params === type){
                setRecipes([...recipes, ...data])
            }else {
                setRecipes(data);
                setParams(type);
            }
            })
        setIsPostLoading(false);
    }

    return (
        <>
           <Category/>
            {isPostLoading && <div className={css.wrap_loader}><Loader/></div>}
             <div className={css.wrap_recipes_item}>
                    {recipes.map((recipe, index) => <RecipeItem key={index} recipe = {recipe}/>)}
             </div>
            <div ref={lastElement} className={css.last_element}></div>

        </>
    );
};

export {Cuisine};