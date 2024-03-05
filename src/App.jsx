/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import PopularCategory from './assets/Components/PopularCategory/PopularCategory';
import LatestProduct from './assets/Components/LatestProduct/LatestProduct';
import PopularSellers from './assets/Components/PopularSellers/PopularSellers';
import NavBar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';
import RatingsAndReviews from './assets/Components/RatingsAndReviews/RatingsAndReviews';
import Footer from './assets/Components/Footer/Footer';
import AllCategories from './assets/Components/AllCategories/AllCategories';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="whole-bg">
      <Hero></Hero>
      <PopularCategory></PopularCategory>
      <LatestProduct></LatestProduct>
      <PopularSellers></PopularSellers>
      <RatingsAndReviews></RatingsAndReviews>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App


// 