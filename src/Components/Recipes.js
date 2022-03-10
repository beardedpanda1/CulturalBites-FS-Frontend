import React from 'react';
import SearchBar from './SearchBar';
// import SearchResults from './SearchResults';



// import searchResult from './SearchBar';

function Recipes() {
    
    return (
        <div className="recipesLetter">
            <h2 className="letterTitle"><center>Find your Recipes by letter here!</center></h2>
            <SearchBar />

            {/* Name: {data.meals[0].strMeals} */}
            
        </div>
    )
}

export default Recipes;
