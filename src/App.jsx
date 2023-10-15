import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import {Routes, Route, useLocation} from 'react-router-dom'
import { CarFinder, FinderContainer, SearchByType, SearchPage,  } from './CarFinder'
import { CarPage } from './CarPage'

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}



function App() {


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className='container-1'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path ='/search/:id' element={<SearchByType />} />
        <Route path='/listing/:id' element={<CarPage />} />
      </Routes>
      </div>
    </>
  )
}

export default App
