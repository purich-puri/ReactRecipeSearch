import React from 'react';
import Style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {

    return(
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(item => (
                    <li>{item.text}</li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed(2)}</p>
            <img className={Style.image} src={image} alt=""/>

        </div>
    );
};

export default Recipe;