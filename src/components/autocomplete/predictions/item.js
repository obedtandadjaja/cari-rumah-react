import React from 'react'
import { Link } from 'react-router-dom'

import './item.css'

class PredictionItem extends React.Component {
  render() {
    console.log(this.props.prediction)
    return (
      <div className='predictionItem'>
        <span>
          <Link
            to={{
              pathname: '/search',
              search: '?param=hello',
              hash: '',
              state: {}
            }} />
          {this.props.prediction.description}
        </span>
      </div>
    )
  }
}

export default PredictionItem
