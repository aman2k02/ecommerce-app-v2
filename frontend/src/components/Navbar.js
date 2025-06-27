// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopEase</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/cart">Cart ({cartItems.length})</Link>
            {!user.is_staff && <Link to="/order-history">Orders</Link>}
            {user.is_staff && <Link to="/admin-dashboard">Admin</Link>}
            <span className="welcome-text">Hi, Aman {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
