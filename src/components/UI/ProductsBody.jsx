import { useContext } from "react";
import { products } from "../Products-data/products";
import { HeaderComponent } from "./Header";
import { ShopppingContext } from "../store/ShoppingContext";

import { toast } from "react-toastify";

export const ProductBody = () => {
  const { addItemToCart } = useContext(ShopppingContext);

  const handleAddToCart = (productId, productName) => {
    addItemToCart(productId);
    toast.success(`Added ${productName} to the cart`, {
      autoClose: 800,
    });
  };
  return (
    <>
      <HeaderComponent />
      <div className=" bg-[#486966] ">
        <ul className="flex flex-wrap justify-center ">
          {products.map((product) => (
            <div
              className="w-full sm:w-[20px] md:w-1/4 lg:w-1/6 xl:w-1/6 my-4 mx-4 p-4 bg-[#DEEFE7] rounded-md"
              key={product.id}
            >
              <div className=" flex flex-col items-center">
                <div className="block rounded-lg bg-[#DEEFE7] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-t-lg h-[100px] w-[100px]"
                  />
                </div>
                <div className="p-3">
                  <h5 className="mb-2 text-xl font-medium leading-tight  text-[#002333]">
                    {product.title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product.id, product.title)}
                    className=" bg-[#3B3936] text-white hover:bg-amber-400  hover:text-black p-2 rounded-md "
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
