import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/header'
import Homepage from './pages/homepage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
