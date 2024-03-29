import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductBody } from "./components/UI/ProductsBody";
import { Cart } from "./components/Pages/Cart";
import { ShopppingContextProvider } from "./components/store/ShoppingContext";
import { ThankyouShopping } from "./components/Pages/Thankyou-shopping";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckoutForm } from "./components/Pages/CheckoutForm";

function App() {
  return (
    <ShopppingContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductBody />} />
          <Route path="/home" element={<ProductBody />} />
          <Route path="/your-cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/orderplaced" element={<ThankyouShopping />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ShopppingContextProvider>
  );
}

export default App;
