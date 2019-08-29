import React from 'react'

import './list.css'
import PredictionItem from './item'

class PredictionsList extends React.Component {
  render() {
    return (
      <ul className='predictionsList'>
        {
          this.props.predictions.map((prediction, i) => (
            <li className='predictionsListLi' key={i}>
              <PredictionItem prediction={prediction} />
            </li>
          ))
        }
      </ul>
    )
  }
}

export default PredictionsList
