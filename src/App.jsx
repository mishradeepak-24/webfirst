import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MiddleSection from './components/MiddleSection'
import DownSection from './components/DownSection'
import { MainSection } from './components/MainSection'
import FooterSection from './components/FooterSection'


const App = () => {
  return (
    <div className='h-full bg-gray-50'>
      <Home/>
      <Navbar/>
      <MiddleSection/>
      <DownSection/>
      <MainSection/>
      <FooterSection/>
    </div>
  )
}

export default App