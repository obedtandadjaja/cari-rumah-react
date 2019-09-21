import React from 'react'
import { Link } from 'react-router-dom'

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
          <LinksContainer links={mainLinks} />
          <h1 className='temporaryTitle'>
            <Link to={{ pathname: '/' }}>
              Cari Rumah
            </Link>
          </h1>
          <LinksContainer links={userLinks} />
        </div>
      </header>
    )
  }
}

export default Header
