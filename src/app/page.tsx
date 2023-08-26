import React from "react";
import Banner from "./components/LandingPage/Banner";
import ProductsList from "./components/LandingPage/ProductsList";
import { getHeader } from "./utils";

const page = async () => {
  const Header = await getHeader();

  return (
    <div>
      <Banner />
      <ProductsList />
    </div>
  );
};

export default page;
