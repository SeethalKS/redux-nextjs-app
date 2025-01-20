import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';
import { removeFromCart, clearCart } from '../../GlobalRedux/Features/cart/cart-slice';

import { useRouter } from 'next/router'; // Import useRouter


export default function Cart() {

//     const router = useRouter();
//     const [isClient, setIsClient] = useState(false); 
//     // Set `isClient` to true when component is mounted on the client
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

  const cartItems = useSelector((state: RootState) => state.Cart.items);  // Corrected selector
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Ensure cartItems is defined and is an array
  if (!Array.isArray(cartItems)) {
    return <p>Error: Cart data is not an array.</p>;
  }

  // Calculate total price safely
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price || 0;  // Default to 0 if price is undefined
    const itemQty = item.qty || 0;  // Default to 0 if qty is undefined
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
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <img src={item.image} alt={item.title} height={50} width={50} className="me-3" />
                  <strong>{item.title}</strong>
                  <p className="mb-0">Quantity: {item.qty}</p>
                  {item.price && <p className="mb-0">Price: ₹{item.price}</p>}
                </div>
                <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <h4>Total Price: ₹{totalPrice.toFixed(2)}</h4> {/* Use toFixed to show 2 decimal places */}
            <button className="btn btn-warning" onClick={handleClearCart}>
              Clear Cart
            </button>
            {/* <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => router.back()}>Back</button>
      </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
