import "./App.css";
import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import ContactMap from './component/ContactMap';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ContactMap />
      <Footer />
    </div>
  );
}

export default App;