import React, {useState} from 'react';

import css from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";


const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className={css.wrap_input}>
                <FaSearch/>
                <input
                    onChange={(e)=>setInput(e.target.value)}
                    type='text'
                    value={input}/>
            </div>
        </form>
    );
};

export {Search};