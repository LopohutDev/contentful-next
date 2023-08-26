import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className="py-10 mx-auto max-w-7xl">
      <div className="text-center">
        <h1 className="text-3xl text-heading font-roboto">Products</h1>
        <p className="text-sm text-paragraph">
          Order it for you or for your beloved ones{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 my-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsList;
