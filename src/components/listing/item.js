import React from 'react'
import Pluralize from 'pluralize'

import './item.css'

class ListingItem extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='listingItem'>
        {
          this.props.listing.display_picture &&
            <div className='listingItemPicture' style={{backgroundImage: `url(${this.props.listing.display_picture})`}} />
        }
        <div className='listingItemBody'>
          <span className='listingItemPrice'>Rp. {(this.props.listing.price_idr/100).toLocaleString()}</span>
          <div className='listingItemStatsContainer'>
            {
              this.props.listing.num_bedrooms &&
                <span className='listingItemStatsItem'>{Pluralize('Bed', this.props.listing.num_bedrooms, true)}</span>
            }
            {
              this.props.listing.num_bathrooms &&
                <span className='listingItemStatsItem'>{Pluralize('Bath', this.props.listing.num_bathrooms, true)}</span>
            }
            {
              this.props.listing.num_parking_spots &&
                <span className='listingItemStatsItem'>{Pluralize('Parking', this.props.listing.num_parking_spots, true)}</span>
            }
          </div>
          <span className='listingItemAddress'>{this.props.listing.address.full_address}</span>
        </div>
      </div>
    )
  }
}

export default ListingItem
