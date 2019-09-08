import React from 'react'
import Pluralize from 'pluralize'

import './item.css'

class ListingItem extends React.Component {
  render() {
    return (
      <div className='listingItem'>
        <div className='listingItemPicture' style={{backgroundImage: `url(${this.props.listing.display_picture})`}} />
        <div className='listingItemBody'>
          <span className='listingItemPrice'>Rp. {(this.props.listing.price_cents/100).toLocaleString()}</span>
          <div className='listingItemStatsContainer'>
        <span className='listingItemStatsItem'>{Pluralize('Bed', this.props.listing.num_bedrooms, true)}</span>
        <span className='listingItemStatsItem'>{Pluralize('Bath', this.props.listing.num_bathrooms, true)}</span>
        <span className='listingItemStatsItem'>{Pluralize('Parking', this.props.listing.num_parking_spots, true)}</span>
          </div>
          <span className='listingItemAddress'>{this.props.listing.address.address_1}</span>
        </div>
      </div>
    )
  }
}

export default ListingItem
