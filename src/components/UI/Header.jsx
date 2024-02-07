import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopppingContext } from "../store/ShoppingContext";

export const HeaderComponent = () => {
  const { items } = useContext(ShopppingContext);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-[#002333] text-white py-2 px-4 h-24 md:px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-bold ">Shopping Zone</h1>
      <Link
        to="/your-cart"
        className="bg-[#B2BEBF] text-black rounded-md px-2 md:px-4 h-12 w-auto py-2 md:py-3 hover:bg-yellow-400 flex items-center"
      >
        <span>
          <FontAwesomeIcon icon={faCartShopping} className="md:px-2" />
        </span>
        <p className=" md:pr-4">Your Cart</p>
        {items.length > 0 && <span>{totalQuantity}</span>}
      </Link>
    </div>
  );
};
