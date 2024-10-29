import { useState } from 'react'
import Header from './Componets/Header'
import './App.css'
import Slider from './Componets/Slider'
import PrductionHouse from './Componets/PrductionHouse'
import GenreMovieList from './Componets/GenreMovieList'

function App() {
  
  

  return (
  
    <div className="App">
      <Header />
      <Slider/>
      <PrductionHouse/>
      <GenreMovieList/>
    </div>

  
  )
}

export default App
