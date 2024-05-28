import React from 'react'
import Navbar from './Navbar';
import Works from './Works';
import Posts from './Posts';
import Footer from './Footer';
import Introduction from './Introduction';


function Homepage() {
  return (
    <div>
        <Navbar />
        <Introduction />
        <Posts />
        <Works />
        <Footer />
    </div>
  )
}

export default Homepage
