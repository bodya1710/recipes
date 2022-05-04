import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Cuisine} from "../Cuisine/Cuisine";
import {Home} from "../Home/Home";
import {Favorites} from "../Favorites/Favorites";
import {Searched} from "../Searched/Searched";
import {Recipe} from "../Recipe/Recipe";

const Pages = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/recipe/:id'} element={<Recipe/>}/>
            <Route path={'/cuisine/:type'} element={<Cuisine/>}/>
            <Route path={'/searched/:search'} element={<Searched/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
        </Routes>
    );
};

export {Pages};