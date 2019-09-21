import React from 'react'

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
        {
          this.props.listings.length === 0 &&
          <div class='listingItem' style={{padding:'10px'}}>
            <span role='img'>Mohon maap nih ga ketemu listing di daerah situ... 😭</span>
          </div>
        }
      </div>
    )
  }
}

export default ListingsList
