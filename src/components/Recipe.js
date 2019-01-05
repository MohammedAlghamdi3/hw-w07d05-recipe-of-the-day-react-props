import React from 'react';

const Recipe = (props) => {
    const RecipesAll = props.recipes;
    return (
        <div className="Recipe">
            <p>Name: {RecipesAll.name}</p>
            <p>Servings: {RecipesAll.servings}</p>
            <p>Category: {RecipesAll.category}</p>
        </div>
    )
}

export default Recipe;