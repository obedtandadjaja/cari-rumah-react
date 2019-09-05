import React from 'react'

import './home-container.css'
import BackgroundImage from './backgroundImage'
import Autocomplete from './autocomplete/autocomplete'

class HomeContainer extends React.Component {
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

export default HomeContainer
