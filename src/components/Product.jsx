import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";


const Product = ({ product }) => {

  const { id, image_url:image,tagline,name, attenuation_level:price , volume} = product;

  const {value, unit} = volume;

  return (
    /* Here is just one block, with border and an image in it */
    <div className="group">
      <div className="border border-[#e2e2e2] dark:border-dark200 h-[300px] mb-4 relative overflow-hidden group transition">
        <div
          className="w-full h-full flex justify-center items-center"
          key={id}
        >
          <img
            className=" max-h-[160px] transition-all group-hover:scale-110 transition-duration-100"
            src={image}
            alt=""
          />
        </div>

      </div>
      {/* category and price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          {tagline}
        </div>
        <Link to={`/products/${id}`}>
            <h2 className="font-semibold dark:text-white mb-1 text-xl group-hover:underline group-hover:underline-offset-1">{name}</h2>
        </Link>
        <div className="font-semibold dark:text-white">{value} {unit}</div>
      </div>
    </div>
  );
};

export default Product;
