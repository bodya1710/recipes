import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {recipeService} from "../../service/recipe.service";

import css from "./Recipe.module.css";
import {Loader} from "../../components";

const Recipe = () => {

    const [activeTab, setActiveTab] = useState();

    const {id} = useParams();

    const [recipe, setRecipe] = useState(null);
    const [isPostLoading, setIsPostLoading] = useState(false);


    useEffect(()=>{
        fetchRecipe();
    }, [id]);

    async function fetchRecipe() {
        setIsPostLoading(true)
        await recipeService.getById(id).then(recipe => {
            setRecipe(recipe.data);
            console.log(recipe.data)
        })
        setIsPostLoading(false);
    }


    return (
        recipe &&
        (
            <div>
                {isPostLoading && <div className={css.wrap_loader}><Loader/></div>}
            <div className={css.wrap_recipe}>
                <div>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
                <div className={css.info}>
                    <button
                        className={activeTab === 'instruction' ? css.action : ''}
                        onClick={()=> setActiveTab('instruction')}
                    >Instruction</button>
                    <button
                        className={activeTab === 'ingredients' ? css.action : ''}
                        onClick={()=> setActiveTab('ingredients')}
                    >Ingredients</button>
                </div>

            </div>
        </div>)

    );
};

export {Recipe};