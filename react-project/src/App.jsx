import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import MovieList from './MovieList'
import moviesData from './movies.json'

function App() {

  return (
    <>
      <NavBar />
      <MovieList movies={moviesData} />
    </>
  )
}

export default App
