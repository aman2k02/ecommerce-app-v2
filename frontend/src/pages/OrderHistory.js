import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../api/axios';
import AuthContext from '../context/AuthContext';

const OrderHistory = () => {
  const { authTokens } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axiosInstance.get('orders/my-orders/');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [authTokens]);

  if (loading) {
    return <div className="text-center mt-4">Loading order history...</div>;
  }

  if (orders.length === 0) {
    return <div className="text-center mt-4">No orders found.</div>;
  }

  return (
    <div className="container mt-4">
      <h2>My Order History</h2>
      {orders.map(order => (
        <div key={order.id} className="card my-3">
          <div className="card-header">
            Order #{order.id} — <strong>{new Date(order.created_at).toLocaleString()}</strong>
          </div>
          <ul className="list-group list-group-flush">
            {order.items.map(item => (
              <li key={item.id} className="list-group-item">
                {item.product.name} — Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
