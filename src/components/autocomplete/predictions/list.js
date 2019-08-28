import React from 'react'

import PredictionItem from './item'

class PredictionsList extends React.Component {
  render() {
    return (
      <ul class='predictionsList'>
        {
          this.props.predictions.map(prediction => (
              <li><PredictionItem prediction={prediction} /></li>
          ))
        }
      </ul>
    )
  }
}

export default PredictionsList
