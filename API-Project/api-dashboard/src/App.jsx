import React from 'react'
import Navbar from './components/Navbar.jsx';
import News from './components/News.jsx';
import Weather from './components/Weather.jsx';

const App = () => {

  return (
    <div className='app'>
      <Navbar/>
      <Weather/>
      <News/>
      
    </div>
  )
}

export default App
