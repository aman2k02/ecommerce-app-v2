import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      await axiosInstance.post('orders/place-order/', {
        items: cartItems.map(item => ({
          product: item.id,
          quantity: item.quantity,
        })),
      });
      clearCart();
      alert('Order placed successfully!');
      navigate('/order-history');
    } catch (error) {
      alert('Checkout failed!');
      console.error(error);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty.</p> : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
