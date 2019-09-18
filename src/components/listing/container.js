import React from 'react'

import './container.css'
import ListingItem from './item'

class ListingContainer extends React.Component {
  state = {
    batchSize: 20
  }

  render() {
    return (
      <div className='listingContainer'>
        <div className='listingContainerResultsCounter'>
          Menunjukkan {this.state.batchSize < this.props.listings.length ? this.state.batchSize : this.props.listings.length} dari {this.props.listings.length}
        </div>
        {
          this.props.listings.map(listing => {
            return (
                <ListingItem listing={listing} />
            )
          })
        }
      </div>
    )
  }
}

export default ListingContainer
