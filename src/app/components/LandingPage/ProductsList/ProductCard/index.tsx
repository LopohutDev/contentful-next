import React from "react";

const ProductCard = () => {
  return (
    <div className="h-[250px] shadow-lg flex flex-col">
      <div className="flex-1 bg-gray-200"></div>
      <div className="p-5">
        <p className="font-medium text-priceTitle">Spiced Mint</p>
        <p className="float-right text-lg text-green-500">9.99$</p>
      </div>
    </div>
  );
};

export default ProductCard;
