import React from 'react'

import './item.css'

class PredictionItem extends React.Component {
  render() {
    return (
      <div className='predictionItem'>
        <span>{this.props.prediction.description}</span>
      </div>
    )
  }
}

export default PredictionItem
