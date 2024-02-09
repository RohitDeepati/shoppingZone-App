import { Link } from "react-router-dom";

export const ThankyouShopping = () => {
  return (
    <>
      <div className="bg-[#002333] text-white py-2 px-4 h-24 md:px-8 flex justify-between items-center sticky top-0 z-50">
        <Link to="/home">
          <h1 className="text-2xl md:text-3xl font-bold ">Shopping Zone</h1>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-16 mt-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-24 w-24 text-gray-400 mb-4"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        <p>Order Placed</p>
        <p className="p-3 text-lg font-semibold mb-4">
          Thank you for shopping.
        </p>
        <Link to="/home">
          <button className="px-6 py-2 bg-[#B2BEBF] text-black rounded-md shadow-md hover:opacity-85 transition-colors duration-300">
            ← Home!
          </button>
        </Link>
      </div>
    </>
  );
};
