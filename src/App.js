import React from 'react'
import './App.css'
import HeaderContainer from './components/header/container'

function App() {
  let links = [{displayName: 'Heyy'}]

  return (
    <div className="App">
      <HeaderContainer links={links} />
      <p>Contents</p>
    </div>
  )
}

export default App
