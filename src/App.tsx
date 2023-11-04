import React from 'react';
import { useAppSelector } from 'hooks';
import { Navigation } from 'navigation';
import { Footer, Header } from 'components';
import './App.css';

const App: React.FC = () => {

  const store = useAppSelector(state => state.product)
  console.log("store", store)

  return (
   <>
    <Header />
    <Navigation />
    <Footer />
   </>
  );
}

export default App;
