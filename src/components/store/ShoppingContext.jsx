import { createContext, useState } from "react";
import { products } from "../Products-data/products";

export const ShopppingContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  removeItem: () => {},
});

export const ShopppingContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const handleAddItemToCart = (id) => {
    setShoppingCart((prevShoppingCart) => {
      const updateItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updateItems.findIndex(
        (cartItem) => cartItem.id === id
      );

      const existingCartItem = updateItems[existingCartItemIndex];

      if (existingCartItem) {
        const updateItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updateItems[existingCartItem] = updateItem;
      } else {
        const product = products.find((product) => product.id === id);
        updateItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
          img: product.image,
        });
      }

      return {
        items: updateItems,
      };
    });
  };

  const handleUpdateCartItemQuantity = (productId, amount) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updateItem = {
        ...updatedItems[updatedItemIndex],
      };
      updateItem.quantity += amount;

      if (updateItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updateItem;
      }
      return {
        items: updatedItems,
      };
    });
  };

  const handleCheck = () => {
    setShoppingCart({
      items:[]
    });
  };

  const handleRemoveItem = (id) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = prevShoppingCart.items.filter(
        (item) => item.id !== id
      );
      return {
        items: updatedItems,
      };
    });
  };

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    removeItem: handleRemoveItem,
    checkoutBtn: handleCheck,
  };
  return (
    <ShopppingContext.Provider value={ctxValue}>
      {children}
    </ShopppingContext.Provider>
  );
};
