import React from 'react';
import Navbar from './nav';
import Footer from './footer';
import '../CSS/App.css'


const MasterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div >{children}</div>
      <Footer />
    </div>
  );
};

export default MasterLayout;