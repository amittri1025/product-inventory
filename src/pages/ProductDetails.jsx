import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // const {tagline, name, description, contributed_by, food_pairing, ingredients, ph, image_url:image, brewers_tips, abv, attenuation_level} = product;

  const tagline = "A great coffee",
    name = "Super Buzz",
    description =
      "The best of A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    contributed_by = "Amit Tripathi",
    food_pairing = ["Lassangme", "Samosa", "Chilli Potato"],
    ph = "12",
    image = "https://images.punkapi.com/v2/2.png",
    brewers_tips = "chini thokke masala rokke",
    abv = 12,
    attenuation_level = 34;

  const ingredients = {
    malt: [
      {
        name: "Maris Otter Extra Pale",
        amount: {
          value: 3.25,
          unit: "kilograms",
        },
      },
      {
        name: "Caramalt",
        amount: {
          value: 0.2,
          unit: "kilograms",
        },
      },
      {
        name: "Munich",
        amount: {
          value: 0.4,
          unit: "kilograms",
        },
      },
    ],
    hops: [
      {
        name: "Amarillo",
        amount: {
          value: 13.8,
          unit: "grams",
        },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Simcoe",
        amount: {
          value: 13.8,
          unit: "grams",
        },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Amarillo",
        amount: {
          value: 26.3,
          unit: "grams",
        },
        add: "end",
        attribute: "flavour",
      },
      {
        name: "Motueka",
        amount: {
          value: 18.8,
          unit: "grams",
        },
        add: "end",
        attribute: "flavour",
      },
    ],
    yeast: "Wyeast 1056 - American Ale™",
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto tracking-wider">
        {/* image */}
        <div className="flex flex-col md:flex-row items-center">
     
          <div className="  flex flex-1 justify-center items-center mb-8 lg:mb-0 w-1/12">
            <img className=" object-cover  md:h-[500px]" src={image} alt="" />
          </div>

          <div className=" flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {name}
              <p className="text-sm italic text-gray-600">
                "The best you have ever seen"
              </p>
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              <div>
                <span className="bg-red-600 p-2 mx-2 rounded-md text-white text-sm">
                  RM: 50
                </span>
                <span className="bg-purple-600 p-2 mx-2 rounded-md text-white text-sm">
                  RM: 50
                </span>
                <span className="bg-yellow-600 p-2 mx-2 rounded-md text-white text-sm">
                  RM: 50
                </span>
                <span className="bg-blue-600 p-2 mx-2 rounded-md text-white text-sm">
                  RM: 50
                </span>
              </div>
            </div>

            <p className="mb-8">{description}</p>
            <p className="tracking-wide">Ingredients Used: </p>
            <div>
              <h2>Ingredients:</h2>
              <div>
                <h2>Ingredients:</h2>
              </div>
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
