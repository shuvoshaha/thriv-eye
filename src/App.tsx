import React from 'react';
import { useAppSelector } from 'hooks';
import { Navigation } from 'navigation';
import { Footer, Header } from 'components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Layout from 'layout/layout';

const App: React.FC = () => {

  const store = useAppSelector(state => state.product)
  console.log("store", store)

  return (
   <>
    <Header />
    <Layout />
    <Footer />
   </>
  );
}

export default App;
