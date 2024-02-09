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
      <div className="bg-[#486966]">
        <ul className="flex flex-wrap justify-center">
          {products.map((product) => (
            <div
              className="w-full md:w-1/4 lg:w-1/6 xl:w-1/6 my-4 mx-4 p-4 bg-white rounded-md flex flex-col justify-between"
              key={product.id}
            >
              <div className="flex items-center justify-center rounded-lg bg-white mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-t-lg h-[100px] w-[100px] object-contain"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="p-3">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-[#002333]">
                    {product.title}
                  </h5>
                  <p className="mb-4 font-semibold text-base text-neutral-600">
                    ${product.price}
                  </p>
                </div>
                <div className="">
                  <button
                    onClick={() => handleAddToCart(product.id, product.title)}
                    className="bg-[#B2BEBF] text-black hover:bg-amber-400 hover:text-white p-3 rounded-md"
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
