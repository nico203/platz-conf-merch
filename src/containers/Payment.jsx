import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';

export const Payment = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'asd',
    intent: 'capture',
    currency: 'USD',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Pamynet">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div key={item.title} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            amount={handleSumTotal()}
            onSuccess={(data) => handlePaymentSuccess(data)}
          />
        </div>
      </div>
    </div>
  );
};
