import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopppingContext } from "../store/ShoppingContext";
import { toast } from "react-toastify";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const { checkoutBtn } = useContext(ShopppingContext);

  const [enteredName, setEnteredName] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredPostalCode, setEnteredPostalCode] = useState("");
  const [enteredCity, setEnteredCity] = useState("");

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredStreet("");
    setEnteredPostalCode("");
    setEnteredCity("");
  };

  const handleCheckoutButton = () => {
    if (
      isEmpty(enteredName) ||
      isEmpty(enteredCity) ||
      isEmpty(enteredStreet)
    ) {
      return;
    }

    if (!isSixChars(enteredPostalCode)) {
      return;
    }

    checkoutBtn();
    toast.success(`Order placed successfully✅`, {
      autoClose: 1000,
    });
    navigate("/orderplaced");
  };
  return (
    <div className="bg-gray-200 mb-10">
      <div className="bg-[#002333] text-white py-2 px-4 h-24 md:px-8 flex justify-between items-center sticky top-0 z-50">
        <Link to="/home">
          <h1 className="text-2xl md:text-3xl font-bold ">Shopping Zone</h1>
        </Link>
      </div>
      <div className="text-center p-4">
        <h2 className="mb-10 p-4 text-4xl font-bold text-center text-black ">
          Shipping Address
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white  p-10 rounded-lg max-w-md mx-auto"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            ref={nameInputRef}
            className="block py-2.5 px-0 w-full text-md text-black bg-transparent border-0 border-b-2 focus:border-black border-gray-300 appearance-none focus:outline-none peer"
          />
          {!formValidity.name && (
            <p className="text-red-400">Please enter a valid name</p>
          )}
          <label
            htmlFor="text"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-[#002333] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={enteredStreet}
            onChange={(e) => setEnteredStreet(e.target.value)}
            ref={streetInputRef}
            id="street"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer"
          />
          {!formValidity.street && (
            <p className="text-red-400">Please enter a valid street!</p>
          )}
          <label
            htmlFor="street"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#002333]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Street
          </label>
        </div>

        {/*  */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="postalcode"
            ref={postalCodeInputRef}
            value={enteredPostalCode}
            onChange={(e) => setEnteredPostalCode(e.target.value)}
            className="block focus:border-black py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
            placeholder=" "
          />
          {!formValidity.postalCode && (
            <p className="text-red-400">
              Please enter a valid Six Character postal code!
            </p>
          )}
          <label
            htmlFor="postalcode"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#002333]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Postal Code
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="city"
            value={enteredCity}
            onChange={(e) => setEnteredCity(e.target.value)}
            ref={cityInputRef}
            className="block focus:border-black py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0  peer"
            placeholder=" "
          />
          {!formValidity.city && (
            <p className="text-red-400">Please enter a valid city!</p>
          )}
          <label
            htmlFor="city"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#002333]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <Link to="/your-cart">
              <button
                type="submit"
                className="text-amber-600 hover:text-white hover:bg-red-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Cancel
              </button>
            </Link>
          </div>
          <div className="relative text-end z-0 w-full mb-5 group">
            <button
              onClick={handleCheckoutButton}
              type="submit"
              className="text-white bg-amber-500 hover:bg-green-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
