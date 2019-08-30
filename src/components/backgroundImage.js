import React from 'react'

import './backgroundImage.css'

class BackgroundImage extends React.Component {
  render() {
    return (
        <div className='backgroundImage' style={{backgroundImage: `url(${this.props.backgroundImage})`}}>
      </div>
    )
  }
}

export default BackgroundImage
