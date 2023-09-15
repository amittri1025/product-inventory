import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import IngredientList from "../components/IngredientList";
import ProductChip from "../components/ProductChip";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const {tagline, name, description, contributed_by, food_pairing, ingredients, ph, image_url:image, brewers_tips, abv,ibu, srm,ebc, attenuation_level} = product;


  return (
    <section className="container mx-auto px-5 md:pt-32 pb-12 lg:py-32 h-screen flex items-center dark:text-white">
      <div className="container mx-auto tracking-wider">
        {/* image */}
        <div className=" flex flex-col md:flex-row items-center">
          <div className="  flex flex-1  justify-center items-center mb-8 lg:mb-0 w-1/12">
            <img className=" object-cover  md:h-[500px]" src={image} alt="" />
          </div>

          <div className="md:pr-10 flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {name}
              <p className="text-sm italic text-gray-600">
                "The best you have ever seen"
              </p>
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              <div>
                <ProductChip title = "ph" value={ph} />
                <ProductChip title = "ebc" value={ebc} />
                <ProductChip title = "ibu" value={ibu} />
                <ProductChip title = "srm" value={srm} />
              </div>
            </div>

            <p className="mb-3">{description}</p>
            {/* ingredients */}
            <div className="bg-fuchsia-200 mb-5 py-5 px-3 rounded-md">
              <p className="text-orange-700">Ingredients Used: </p>
              <IngredientList title="Malts" ingredient={ingredients.malt} />
              <IngredientList title="Hops" ingredient={ingredients.hops} />

              <span className="text-green-900">Yeast : </span>
              <span className="text-black">{ingredients.yeast}</span>
            </div>
            
            <p className="mb-8">Contributed by: {contributed_by}</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ProductDetails;
