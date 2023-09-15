import React from "react";

const IngredientList = ({title, ingredient}) => {
  return (
    <>
      <span className="text-green-900">{title} : </span>
      {ingredient.map((ing, index) => (
        <span key={index}>{ing.name} {index!==ingredient.length-1 ? ',':' '} </span>
      ))}
      <br />
    </>
  );
};

export default IngredientList;
