import React from 'react'
import '../App.css';
import cdacImage from '../WhatsApp Image 2023-08-28 at 10.24.10 PM.jpeg'

const home = () => {
  return (
    <div>
      <div className="App">
      <header className="App-header">
        <img src={cdacImage} alt='cdac' id='cdacImg'/>
      </header>
    </div>
    </div>
  )
}

export default home
