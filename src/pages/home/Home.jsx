import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import Hero from '../../components/herosection/Hero';
import {craousel} from '../../components/herosection/HeroDataimg';
import Slider from '../../components/container/slider/Slider';
import { craousel2 } from '../../components/container/slider/sliderdata';
import Product from '../../components/container/allproducts/Product';
import Trendyproduct from '../../components/container/allproducts/Trendyproduct';

const Home = () => {
  const context = useContext(myContext);

  return (
    <>
    
      <Layout>
        <Hero images={craousel} />
        <Slider image2={craousel2} />
        <Product/>
        <Trendyproduct />
       </Layout>
    </>
  )
}

export default Home
