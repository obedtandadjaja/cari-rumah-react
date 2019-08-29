import React from 'react'

import './container.css'
import PredictionsList from './list'

class PredictionsContainer extends React.Component {
  render() {
    return (
      <div className='predictionsContainer'>
        <PredictionsList predictions={this.props.predictions} />
      </div>
    )
  }
}

export default PredictionsContainer
