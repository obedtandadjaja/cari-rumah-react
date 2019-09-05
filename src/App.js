import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import Header from './components/header/header'
import HomeContainer from './components/home-container'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='AppBody'>
          <BrowserRouter>
            <Route exact path="/" component={HomeContainer} />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App
