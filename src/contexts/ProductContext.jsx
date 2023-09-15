import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://api.punkapi.com/v2/beers");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
