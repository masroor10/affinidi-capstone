// Inside your Wishlist.js file
import React from 'react';
import './Wishlist.css'; // Import the Wishlist styles

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="Wishlist">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              {item.name} 
              <button onClick={() => removeFromWishlist(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
