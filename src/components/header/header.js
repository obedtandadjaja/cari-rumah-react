import React from 'react'

import './header.css'
import LinksContainer from './links/container'

const links = [
  {
    url: '#',
    text: 'Home'
  }
]

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header'>
          <LinksContainer links={links} />
        </div>
      </header>
    )
  }
}

export default Header
