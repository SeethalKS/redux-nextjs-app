import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../GlobalRedux/store";
import {
  removeFromCart,
  clearCart,
} from "../../GlobalRedux/Features/cart/cart-slice";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.Cart.items); // Corrected selector
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!Array.isArray(cartItems)) {
    return <p>Error: Cart data is not an array.</p>;
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price || 0;
    const itemQty = item.qty || 0;
    return total + itemPrice * itemQty;
  }, 0);

  return (
    <div className="container">
      <h3 className="text-center">Your Cart</h3>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    height={50}
                    width={50}
                    className="me-3"
                  />
                  <strong>{item.title}</strong>
                  <p className="mb-0">Quantity: {item.qty}</p>
                  {item.price && <p className="mb-0">Price: ₹{item.price}</p>}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <h4>Total Price: ₹{totalPrice.toFixed(2)}</h4>
            <button className="btn btn-warning" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
