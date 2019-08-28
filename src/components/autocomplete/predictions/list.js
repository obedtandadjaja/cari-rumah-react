import React from 'react'

import PredictionItem from './item'

class PredictionsList extends React.Component {
  render() {
    return (
      <ul className='predictionsList'>
        {
          this.props.predictions.map((prediction, i) => (
            <li key={i}><PredictionItem prediction={prediction} /></li>
          ))
        }
      </ul>
    )
  }
}

export default PredictionsList
