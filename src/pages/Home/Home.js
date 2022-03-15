import React from 'react';

import {Category, Dessert, Popular, Veggie} from "../../components";

const Home = () => {

    return (
        <>
            <Category/>
            <Popular/>
            <Veggie/>
            <Dessert/>
        </>
    );
};

export {Home};