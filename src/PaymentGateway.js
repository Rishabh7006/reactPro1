// PaymentGateway.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
  
    const formatCardNumber = (input) => {
        // Remove any non-numeric characters
        const numericValue = input.replace(/\D/g, '');
      
        // Format the numeric value with gaps after every 4 digits
        const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ');
      
        // Trim any trailing space
        return formattedValue.trim();
      };
    const formatExpiryDate = (input) => {
        // Remove any non-numeric characters
        const numericValue = input.replace(/\D/g, '');
      
        // Format the numeric value with a slash after the first 2 characters
        const formattedValue = numericValue.replace(/(\d{2})(\d{0,2})/, '$1/$2');
      
        return formattedValue;
      };
      const setPin = (inputValue) => {
        // Remove any non-numeric characters
        const numericValue = inputValue.replace(/\D/g, '');
      
        // Ensure only the first 3 digits are considered
        const formattedCvv = numericValue.slice(0, 3);
      
        // Return the formatted value
        return formattedCvv;
      };

      const cardName = (inputValue) => {
        // Ensure the name contains only letters and spaces
        const validName = inputValue.replace(/[^A-Za-z\s]/g, '');
        return validName;
      };
    const handlePayment = () => {
    //   Basic validation for card number and CVV
      if (!validateCardNumber(cardNumber) || !validateCvv(cvv)) {
        alert('Invalid card number or CVV. Please check and try again.');
        return;
      }
  
      // Assuming the payment is successful, navigate to order-success
      navigate('/order-success');
    };
  
    const validateCardNumber = (formattedNumber) => {
        // Simple check for 16 digits with spaces
        const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
        return cardNumberRegex.test(formattedNumber);
      };
  
    const validateCvv = (cvv) => {
      // Simple check for 3 digits
      const cvvRegex = /^\d{3}$/;
      return cvvRegex.test(cvv);
    };
  
    return (
      <div className="payment-gateway">
        <h2>Payment Gateway</h2>
        <form>
          <label>
            Card Number:
            <input
                type="tel"
                pattern="\d{4} \d{4} \d{4} \d{4}"  // Pattern with gaps after every 4 digits
                placeholder="Enter your card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                maxLength="19"  // Allow for 16 digits and 3 spaces
            />
          </label>
          <label>
            Expiry Date:
            <input
                type="text"
                pattern="\d{2}/\d{2}"  // Pattern for MM/YY format
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                maxLength="5"  // Allow for MM/YY format
            />
          </label>
          <label>
            CVV:
            <input
                type="password"
                pattern="\d{3}"  // Pattern for 3-digit CVV
                placeholder="Enter CVV"
                value={cvv}
                onChange={(e) => setCvv(setPin(e.target.value))}
                maxLength="3"  // Allow only 3 digits
            />
            </label>
          <label>
            Name on Card:
            <input
              type="text"
              placeholder="Enter your name"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(cardName(e.target.value))}
            />
          </label>
          <button type="button" onClick={handlePayment}>
            Pay Now
          </button>
        </form>
      </div>
    );
  };

export default PaymentGateway;