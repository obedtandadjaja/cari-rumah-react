import React from 'react'

import './home.css'
import BackgroundImage from './../components/backgroundImage'
import Autocomplete from './../components/autocomplete/autocomplete'

class Home extends React.Component {
  render() {
    return (
      <div className='homePage'>
        <BackgroundImage backgroundImage={'https://www.loudwallpapers.com/wp-content/uploads/2018/10/best-dream-house-hd-wallpaper-submitted-by-stuart.jpg'} />
        <h1>Cari rumah dibuat gampang</h1>
        <Autocomplete className='autocompleteContainer' />
      </div>
    )
  }
}

export default Home
