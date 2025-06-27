import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('products/products/')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axiosInstance.delete(`products/products/${productId}/`);
      setProducts(products.filter(p => p.id !== productId));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin - Manage Products</h2>
      <Link to="/create-product">Create New Product</Link>
      {products.length === 0 ? <p>No products found.</p> : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ₹{product.price}
              <Link to={`/edit-product/${product.id}`}>Edit</Link>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
