import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import Autocomplete from './../autocomplete/autocomplete'
import LinksContainer from './links/container'

const userLinks = [
  {
    url: '#',
    text: 'Beli'
  },
  {
    url: '#',
    text: 'Kos'
  },
  {
    url: '#',
    text: 'Buat Listing'
  },
  {
    url: '#',
    text: 'Advertise'
  },
  {
    url: '#',
    text: 'Akun'
  }
]

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header'>
          <h1 className='temporaryTitle'>
            <Link to={{ pathname: '/' }}>
              Cari Rumah
            </Link>
            <div className='headerAutocompleteWrapper'>
              <Autocomplete mini={true} />
            </div>
          </h1>
          <LinksContainer links={userLinks} />
        </div>
      </header>
    )
  }
}

export default Header
