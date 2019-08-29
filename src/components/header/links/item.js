import React from 'react'

import './item.css'

class Item extends React.Component {
  render() {
    return (
      <a className='link' href={this.props.link.url}>{this.props.link.text}</a>
    )
  }
}

export default Item
