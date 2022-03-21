import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {recipeService} from "../../service/recipe.service";

import  css from"./Recipe.module.css";

import {Loader} from "../../components";

const Recipe = () => {

    const [activeTab, setActiveTab] = useState('instruction');

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

    const localFavoritesData = localStorage.getItem('popular');
    // const checked =  check.filter(item => item.id === recipe.id)
    function addFavorites() {
        if (localFavoritesData){
            const localData = JSON.parse(localFavoritesData);
            localStorage.setItem('popular', JSON.stringify([...localData, recipe]))
        }else {
            localStorage.setItem('popular', JSON.stringify([recipe]))
        }
    }
    return (
        recipe &&
        (
            <div>
                {isPostLoading && <div className={css.wrap_loader}><Loader/></div>}
            <div className={css.wrap_recipe}>
                <div className={css.wrap_info_content}>
                    <h2>{recipe.title}</h2>
                    <p className={css.diets}>Diets: {recipe.diets.map(diet => diet)}</p>
                    <p className={css.time_recipe}>Will be ready: {recipe.readyInMinutes} min</p>
                    <img src={recipe.image} alt={recipe.title}/>
                </div>
                <div className={css.info}>
                    <button
                        className={activeTab === 'instruction' ? css.action : ''}
                        onClick={()=> setActiveTab('instruction')}
                    >Instruction</button>
                    <button
                        className={activeTab === 'info' ? css.action : ''}
                        onClick={()=> setActiveTab('info')}
                    >Info</button>
                    <button
                        className={activeTab === 'ingredients' ? css.action : ''}
                        onClick={()=> setActiveTab('ingredients')}
                    >Ingredients</button>
                    <button onClick={()=>addFavorites()}>
                        Add to favorites</button>
                    <div className={css.info_container}>
                        {activeTab === 'instruction' && <p dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>}
                        {activeTab === 'info' && <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>}
                        {activeTab === 'ingredients' && <ul>{recipe.extendedIngredients.map(item => <li key={item.id}>{item.name} - {item.original}</li>)}</ul>}
                    </div>
                </div>

            </div>
        </div>)

    );
};

export {Recipe};