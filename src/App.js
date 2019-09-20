import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import HomePage from './pages/home'
import SearchPage from './pages/search'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='AppBody'>
        <BrowserRouter>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
