import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../api/axios';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axiosInstance.get('products/products/')
            .then(res => setProducts(res.data))
            .catch(err => console.error('Error loading products:', err));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>₹{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
