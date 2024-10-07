import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import FeaturePage2 from './components/FeaturePage2'
import FeaturePage3 from './components/FeaturePage3'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Feature/>
      <FeaturePage2/>
      <FeaturePage3/>
      <Register/>
    </>
  )
}

export default App
