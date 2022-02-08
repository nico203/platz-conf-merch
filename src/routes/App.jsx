import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Checkout } from '../containers/Checkout';
import { Home } from '../containers/Home';
import { Information } from '../containers/Information';
import { NotFound } from '../containers/NotFound';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';

export const App = () => {
  const initalState = useInitialState();
  return (
    <AppContext.Provider value={initalState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
