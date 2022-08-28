import React from 'react';
import Header from '../components/Header/Header';
import Products from '../features/Products/Products';
import Footer from '../components/Footer/Footer';
import './App.css';
const App = () => {
  return (
    <div class= "app">
      <Header/>
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default App;