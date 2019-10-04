import React from 'react'

import './container.css'
import PredictionsList from './list'

class PredictionsContainer extends React.Component {
  render() {
    return (
      <div className={this.props.mini ? 'predictionsContainer mini' : 'predictionsContainer'}>
        <PredictionsList predictions={this.props.predictions} mini={this.props.mini} />
      </div>
    )
  }
}

export default PredictionsContainer
