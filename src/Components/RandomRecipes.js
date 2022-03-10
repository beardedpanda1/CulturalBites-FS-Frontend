import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MoreRecipes from './MoreRecipes';
import Alert from './Alert';


export default function RandomRecipes() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=36e172ac&app_key=6bad0a0e582d6215dc8568a086f6ca75`

    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url);
            setRecipes(result.data.hits);
            console.log(result);
            setQuery("");
        } else {
            setAlert("Invalid Search")
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <div className="recipes">
            <h1 className="specificTitle"><center>Looking For Something Specific?</center></h1>
            <center><form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert} />}
                <input
                    type="text"
                    placeholder="Search Food"
                    autoComplete="off"
                    onChange={onChange}
                    value={query}
                />
                <input type="submit" value="search" />
            </form></center>
            <div className="moreRecipes">
                {
                    recipes !== [] && recipes.map(recipe => <MoreRecipes key={uuidv4()} recipe={recipe} />)
                }
            </div>
        </div>
    )
}