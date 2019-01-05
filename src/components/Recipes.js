import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {

    render() {
        return (
            <div className="header" >
                <h1>Recipes</h1>
                {this.renderRecipes()}
            </div>
        )
    }
    renderRecipes() {
        const RecipesAll = recipes.map((element, index) => {
            return (
                <Recipe recipes={element} key={index} />
            );
        });
        return RecipesAll;
    }
}

export default Recipes;
