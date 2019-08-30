import React from 'react'

import './container.css'
import LinkList from './list'

class HeaderContainer extends React.Component {
  render() {
    return (
      <div className='linksContainer'>
        <LinkList links={this.props.links} />
      </div>
    )
  }
}

export default HeaderContainer
