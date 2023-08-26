import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-auto max-w-7xl">
      <div className="relative h-20 bg-red-500 w-52">icon</div>
      <ul className="flex gap-20">
        <li>Discovery</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex gap-10 text-3xl">
        <AiOutlineUser />
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Header;
