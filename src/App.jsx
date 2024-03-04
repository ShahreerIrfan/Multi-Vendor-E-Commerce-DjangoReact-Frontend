/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import PopularCategory from './assets/Components/PopularCategory/PopularCategory';
import LatestProduct from './assets/Components/LatestProduct/LatestProduct';
import PopularSellers from './assets/Components/PopularSellers/PopularSellers';
import NavBar from './assets/Components/Navbar/Navbar';
import Hero from './assets/Components/Hero/Hero';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <PopularCategory></PopularCategory>
      <LatestProduct></LatestProduct>
      <PopularSellers></PopularSellers>
    </>
  )
}

export default App


// 