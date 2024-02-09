import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopppingContext } from "../store/ShoppingContext";

import { toast } from "react-toastify";

export const Cart = () => {
  const { items, updateItemQuantity, removeItem, checkoutBtn } =
    useContext(ShopppingContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id, productName) => {
    removeItem(id);
    toast.success(`Removed ${productName} from the cart!`, {
      autoClose: 800,
    });
  };

  const formatedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div>
      <div className="bg-[#002333] text-white py-2 px-4 h-24 md:px-8 flex justify-between items-center sticky top-0 z-50">
        <Link to="/home">
          <h1 className="text-2xl md:text-3xl font-bold ">Shopping Zone</h1>
        </Link>
      </div>
      <div className="items-center sm:p-2 lg:py-24 bg-gray-200 font-poppins h-full ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <h2 className="mb-10 text-4xl font-bold text-center text-black ">
            Your Cart
          </h2>
          <div id="cart">
            {items.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-24 w-24 text-gray-400 mb-4"
                >
                  <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                </svg>
                <p className="text-black text-lg font-semibold mb-4">
                  Your shopping cart is empty.
                </p>
                <Link to="/home">
                  <button className="px-6 py-2 bg-gray-400 text-white rounded-lg  hover:opacity-70 transition-colors duration-300">
                    Browse Products
                  </button>
                </Link>
              </div>
            )}
            {items.length > 0 && (
              <ul id="cart-items" className="bg-white p-10 rounded-lg ">
                {items.map((item) => {
                  const formattedPrice = `${(
                    item.price * item.quantity
                  ).toFixed(2)}`;

                  return (
                    <div className="mb-10 " key={item.id}>
                      <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-[#889C9B] xl:justify-between border-opacity-40">
                        <div className="w-full sm:w-1/2 mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                          <img
                            src={item.img}
                            alt=""
                            className="object-contain w-full h-full "
                          />
                        </div>
                        <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
                          <a className="block mb-5 text-xl font-medium  hover:underline">
                            {item.name}
                          </a>
                        </div>
                        <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                          <div className="flex items-center">
                            <h2 className="mr-4 font-medium">Qty:</h2>
                            <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-400 rounded-md ">
                              <button
                                onClick={() => updateItemQuantity(item.id, -1)}
                                className="py-2 pr-2 border-r border-gray-500  "
                              >
                                -
                              </button>
                              <span className="w-12 px-2 py-4 text-center  rounded-md text-[#3B3936]  ">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateItemQuantity(item.id, 1)}
                                className="py-2 pl-2 border-l border-gray-500 text-black"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/*  */}
                        <div className="w-full px-3 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                          <button
                            onClick={() => handleRemove(item.id, item.name)}
                            className="inline-block px-8 py-4 font-bold text-white uppercase bg-red-600 rounded-md hover:bg-red-500"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="w-full px-3 xl:w-auto">
                          <span className="text-medium font-medium text-black">
                            <span className="text-sm">$</span>
                            <span>
                              <strong>{formattedPrice}</strong>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="mb-10">
                  <div className="px-10 py-3 bg-gray-300 rounded-md">
                    <div className="flex justify-between ">
                      <span className="font-medium">Subtotal</span>
                      <span className="font-bold ">{formatedTotalPrice}</span>
                    </div>
                  </div>
                  <div className="px-10 py-3 rounded-md">
                    <div className="flex justify-between ">
                      <span className="font-medium">Shipping </span>
                      <span className="font-bold ">{formatedTotalPrice}</span>
                    </div>
                  </div>
                  <div className="px-10 py-3 rounded-full ">
                    <div className="flex justify-between">
                      <span className="text-base font-bold md:text-xl ">
                        Order Total
                      </span>
                      <span className="font-bold ">
                        <strong>{formatedTotalPrice}</strong>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link to="/home">
                      <button className="inline-block w-full px-8 py-4 mb-4 mr-6 font-bold text-center uppercase transition duration-200 bg-white  rounded-md     md:mb-0 md:w-auto hover:bg-gray-300 ">
                        Browse More Products
                      </button>
                    </Link>
                    <Link to="/checkout">
                      <button className="inline-block w-full px-8 py-4 font-bold text-center text-white uppercase transition duration-200 bg-amber-500 rounded-md md:w-auto hover:bg-amber-600 ">
                        Go to Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
