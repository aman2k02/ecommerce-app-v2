import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleOrder = async () => {
        setLoading(true);
        setError('');

        const orderData = {
            items: cartItems.map(item => ({
                product: item.id,
                quantity: item.quantity
            }))
        };

        try {
            await axiosInstance.post('orders/place/', orderData);
            clearCart();
            navigate('/orders');
        } catch (err) {
            console.error('Order error:', err);
            setError('Failed to place order.');
        } finally {
            setLoading(false);
        }
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name} - ₹{item.price} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ₹{total}</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={handleOrder} disabled={loading}>
                        {loading ? 'Placing Order...' : 'Place Order'}
                    </button>
                </>
            )}
        </div>
    );
};

export default Checkout;
