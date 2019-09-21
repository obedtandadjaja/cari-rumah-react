import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import HomePage from './pages/home'
import SearchPage from './pages/search'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='AppBody'>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
