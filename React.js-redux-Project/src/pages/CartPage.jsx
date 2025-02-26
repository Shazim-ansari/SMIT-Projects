import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded my-2">
             <img className="w-40 py-5 px-5" src={item.Image} alt="" srcset="" />
            <h3>{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
            <button 
              onClick={() => dispatch(removeFromCart(item))}
              className="mt-2 bg-red-500 px-3 py-2 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;