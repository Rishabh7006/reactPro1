import React from 'react';
import Carousel from '../screens/Carousel';
import HomeContent from '../screens/HomeContent';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <HomeContent/>
      <Footer/>
    </div>
  );
};

export default Home;