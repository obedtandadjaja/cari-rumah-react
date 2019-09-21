import React from 'react'
import { PropagateLoader } from 'react-spinners'

import './list.css'
import ListingItem from './item'

class ListingsList extends React.Component {
  render() {
    return (
      <div className='listingsList'>
        {
          this.props.listings.length !== 0 &&
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
