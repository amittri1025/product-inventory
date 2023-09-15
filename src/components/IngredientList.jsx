import React from "react";

const IngredientList = ({title, ingredient}) => {
  return (
    <div className="text-black">
      <span className="text-green-900">{title} : </span>
      {ingredient.map((ing, index) => (
        <span key={index}>{ing.name} {index!==ingredient.length-1 ? ',':' '} </span>
      ))}
      <br />
    </div>
  );
};

export default IngredientList;
