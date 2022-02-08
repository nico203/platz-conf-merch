import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef();
  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      addres: formData.get('addres'),
      dpto: formData.get('dpto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-Head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-Form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="email" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Dirección" name="addres" />
            <input type="text" placeholder="dpto" name="dpto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Provincia" name="state" />
            <input type="text" placeholder="CP" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Volver</Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item) => (
          <div key={item.title} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
