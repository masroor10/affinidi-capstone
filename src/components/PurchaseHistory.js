import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const { purchaseHistory } = useContext(UserContext);

  return (
    <div className="PurchaseHistory">
      <h2>Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p>Your purchase history is empty.</p>
      ) : (
        <ul>
          {purchaseHistory.map((order) => (
            <li key={order.id} className="OrderItem">
              <p>Order ID: {order.id}</p>
              <p>Total: ${order.total}</p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchaseHistory;
