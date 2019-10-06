import React from 'react'
import Pluralize from 'pluralize'

import './item.css'
import ListingItemPicture from './item/picture'

class ListingItem extends React.Component {
  render() {
    return (
      <div className='listingItem'>
        <ListingItemPicture picture_url={this.props.listing.display_picture_url} />
        <div className='listingItemBody'>
          <span className='listingItemPrice'>Rp. {(this.props.listing.price_idr).toLocaleString('id-ID')}</span>
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

function areEqual(prevProps, nextProps) {
  return prevProps.listing.id === nextProps.listing.id
}

export default React.memo(ListingItem, areEqual)
