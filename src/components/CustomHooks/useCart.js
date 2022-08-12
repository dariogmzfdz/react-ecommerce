import { useState, useEffect } from "react";
import CartItem from "../ShoppingCart/CartItem.js";

const loadCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

function useCart() {
  const [cartProducts, setCartProducts] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const AddToCart = (product) => {
    const cart = [...cartProducts];
    const productIndex = cart.findIndex((p) => p.id === product.id);
    if (productIndex >= 0) {
      cart[productIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    setCartProducts(cart);
  };

  const Remove = (product) => {
    const productExist = cartProducts.find(
      (productCart) => productCart.id === product.id
    );
    if (productExist.quantity === 1) {
      setCartProducts(
        cartProducts.filter((productCart) => productCart.id !== product.id)
      );
    } else {
      setCartProducts(
        cartProducts.map((productCart) =>
          productCart.id === product.id
            ? {
                ...productExist,
                quantity: productExist.quantity - 1,
              }
            : productCart
        )
      );
    }
  };

  const RemoveAll = (product) => {
    const productExist = cartProducts.find(
      (productCart) => productCart.id === product.id
    );
    if (productExist) {
      setCartProducts(
        cartProducts.filter((productCart) => productCart.id !== product.id)
      );
    }
  };

  return { AddToCart, Remove, RemoveAll, cartProducts };
}

export default useCart;
