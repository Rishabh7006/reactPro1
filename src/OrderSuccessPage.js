import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function OrderSuccessPage() {
  return (
    <div className="order">
      <h2>Your order #9890 is successfully placed!</h2>
      <h4>Order will get delivered in 40 minutes.</h4>
      {/* Order page content */}
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default OrderSuccessPage;