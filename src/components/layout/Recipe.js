import React from "react";

export const Recipe = ({ recipe }) => {
  return (
    <div className="single-recipe">
      <img src={recipe.url}></img>
      <p className="recipe-category">{recipe.category}</p>
      <p className="recipe-name">{recipe.name}</p>
      <span className="recipe-desc ">Ingredientes: </span>
      {recipe.ingredients.map(i => (
        <span className="recipe-desc " key={i}>
          {" "}
          {i},{" "}
        </span>
      ))}
    </div>
  );
};
