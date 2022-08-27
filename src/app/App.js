import React from 'react';
import Header from '../components/Header/Header';
import Products from '../features/Products/Products';
import Footer from '../components/Footer/Footer';
const App = () => {
  return (
    <div class= "app">
      <Header/>
      <Products />
      <Footer />
    </div>
  );
};

export default App;