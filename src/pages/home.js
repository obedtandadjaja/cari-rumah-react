import React from 'react'

import './home.css'
import BackgroundImage from './../components/backgroundImage'
import Autocomplete from './../components/autocomplete/autocomplete'

class Home extends React.Component {
  render() {
    return (
        <div className='homeContainer'>
        <BackgroundImage backgroundImage={'http://c1.peakpx.com/wallpaper/551/3/749/architecture-family-house-front-yard-wallpaper-preview.jpg'} />
        <h1>Cari rumah dibuat gampang</h1>
        <Autocomplete className='autocompleteContainer' />
        </div>
    )
  }
}

export default Home
