import React from 'react';
import Navbar from './nav';
import Footer from './footer';
import '../CSS/App.css'

const Master = ({ children }) => {
  return (
    <div className="master-layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Master;