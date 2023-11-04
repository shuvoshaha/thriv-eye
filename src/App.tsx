import React from 'react';
import logo from './logo.svg';
import { useAppSelector } from 'hooks';
import { Navigation } from 'navigation';
import './App.css';

function App() {
  const store = useAppSelector(state => state.product)
  console.log("store", store)

  return (
   <>
    <Navigation />
   </>
  );
}

export default App;
