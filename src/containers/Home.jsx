import React from 'react';
import { Products } from '../components/Products';
import initialState from '../initialState';


export const Home = () => <Products products={initialState.products}/>
