import React from 'react';


const Ingredient = (props) => {
    const ingredients = props.ingredient;
    //console.log(ingredients);
    return (
        <div className="Ingredient">
          <h2>Ingredient</h2>  
                <p>Ingredient: {ingredients.ingredient}</p>
                <p>Amount: {ingredients.amount}</p>
        </div>
    )
}

export default Ingredient;