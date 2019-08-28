import React from 'react'

class PredictionItem extends React.Component {
  render() {
    return (
      <p>{this.props.prediction.description}</p>
    )
  }
}

export default PredictionItem
