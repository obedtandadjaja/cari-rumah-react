import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import HomePage from './pages/home'
import ListingPage from './pages/listing'
import SearchHeader from './components/header/searchHeader'
import SearchPage from './pages/search'
import AccountPages from './pages/account'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/' component={Header} />
        <Route path='(/search|/listing|/account)' component={SearchHeader} />
        <div className='AppBody'>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/listing' component={ListingPage} />
          <Route path='/account' component={AccountPages} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
