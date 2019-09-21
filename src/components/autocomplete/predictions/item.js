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
              search: `?placeId=${this.props.prediction.place_id}`,
              hash: '',
              state: {}
            }}>
            {this.props.prediction.description}
          </Link>
        </span>
      </div>
    )
  }
}

export default PredictionItem
