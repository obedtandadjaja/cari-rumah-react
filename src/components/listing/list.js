import React from 'react'

import './list.css'
import ListingItem from './item'

class ListingsList extends React.Component {
  render() {
    return (
      <div className='listingsList'>
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

export default ListingsList
