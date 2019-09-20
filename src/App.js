import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import HomePage from './pages/home-container'
import SearchPage from './components/search-container'

class App extends React.Component {
  render() {
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
}

export default App
