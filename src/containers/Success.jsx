import React, { useContext } from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
// import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  // const location = useGoogleAddress(buyer.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a la direccion:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};
