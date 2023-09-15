import React from "react";

const ProductChip = ({title, value}) => {
  return (
    <span className="bg-red-600 p-2 mx-2 rounded-md text-white text-sm">
      {title}: {value}
    </span>
  );
};

export default ProductChip;
