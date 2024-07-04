import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeItemFromCart, clearCart } from '../features/cart/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h2 className="text-lg">{item.name}</h2>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
