import React, { useState } from 'react';
import './ProductDisplay.css';
import Wishlist from './Wishlist'; // Import the Wishlist component

const ProductDisplay = ({ addToCart }) => {
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
  ];

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
  };

  return (
    <div>
      <div className="ProductDisplay">
        {products.map((product) => (
          <div key={product.id} className="ProductItem">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
      
      {/* Render Wishlist component */}
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
  );
};

export default ProductDisplay;
