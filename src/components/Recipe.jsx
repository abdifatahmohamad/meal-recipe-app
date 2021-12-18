import React from 'react'
import "../style.css"

const Recipe = ({title, calories, image, ingredients}) => {
    return (
    <div className="recipes-box">
        <h3>{title}</h3>
        <ul>
        {ingredients.map(ingredient =>(
            <li key={ingredient.id}>{ingredient.text}</li>
        ))}
        </ul> 
        <img src={image} alt="" />
        <p><span>Calorie: </span>{Math.round(calories * 10) / 10}</p>

    </div>
    )
}

export default Recipe
