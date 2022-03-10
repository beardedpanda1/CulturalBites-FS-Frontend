

import React, { useState } from "react";
import axios from 'axios';
// import SearchResults from './SearchResults';
import '../App.css';

//this is the child component
//pass data to parent component

function SearchBar(props) {
    const [searchValue, setSearchValue] = useState({ searchValue: "" });
    const [searchResult, setSearchResult] = useState({meals:[{
        strMeal:'',
        strMealThumb:'',
        strSource:''}]})
    const handleChange = (e) => {
        setSearchValue(x => {
            return { ...x, [e.target.id]: e.target.value }
        })
    };
    

    const search = (query) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;


        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setSearchResult(res.data)



            })
            .catch((err) => {
                console.log(err)

            })
    }






    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchValue.searchValue);

    };







    // console.log(searchResult)
    return (
        <div className="Recipes">
            <div className="search">
                <center><form onSubmit={handleSubmit} className="cf">
                    <label htmlFor="searchValue">
                        <span className="visually-hidden">Search recipes by letter</span>
                    </label>
                    <input
                        type="text"
                        value={searchValue.searchValue}
                        onChange={handleChange}
                        id="searchValue"
                        placeholder="Search by letter here"

                    />
                    <button className="button" type="submit">Search</button>
                </form></center>
            </div>
            <div className="searchResults"></div>
            {/* <SearchResults /> */}
            

            <div className="Results">
                {
                searchResult.meals.map((searchResults, index) =>
                    <ol key={index} >
                        <center><table>
                        <div className="Recipe">
                            <th><h2><div className="recipeTitle">
                                {searchResults.strMeal}
                            </div></h2></th>
                                <br />
                            <td><div className="recipeImage">
                                <img src={searchResults.strMealThumb} />
                            </div></td>
                                <br />
                            <td><div className="recipeSource">
                                <a href={searchResults.strSource}>Source</a>
                            </div></td>
                                <br />
                        </div>
                        </table></center>
                    </ol>
                )
                }
                {/* {console.log(searchResult.meals)} */}
            </div>

        </div>
    )
};

export default SearchBar;
//array.map, component, props, 