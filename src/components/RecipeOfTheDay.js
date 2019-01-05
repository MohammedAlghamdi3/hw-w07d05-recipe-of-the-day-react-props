import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component {

    

    render() {
      return (
        <div className="header">
            <h1>Recipe of the Day</h1>
            <h2>{recipeOfTheDay.name}</h2>
            <h3>Description:</h3>
            <p>{recipeOfTheDay.description}</p>
            {this.renderIngredients()}
        </div>
      );
    }
    renderIngredients(){
    
        const allRecipeOfTheDay = recipeOfTheDay.ingredients.map((el, index) => {
            return (
                <Ingredient ingredient={el} key={index}/>
            )
        });
        return allRecipeOfTheDay;
    };
  }
  
  export default RecipeOfTheDay;
  