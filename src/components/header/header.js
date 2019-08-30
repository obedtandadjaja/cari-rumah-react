import React from 'react'

import './header.css'
import LinksContainer from './links/container'

const mainLinks = [
  {
    url: '#',
    text: 'Beli'
  },
  {
    url: '#',
    text: 'Kos'
  },
]
const userLinks = [
  {
    url: '#',
    text: 'Buat Listing'
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
          <LinksContainer links={mainLinks} />
          <h1 className='temporaryTitle'>Cari Rumah</h1>
          <LinksContainer links={userLinks} />
        </div>
      </header>
    )
  }
}

export default Header
