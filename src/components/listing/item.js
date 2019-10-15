import React from 'react'
import Pluralize from 'pluralize'

import './item.css'
import ListingItemPicture from './item/picture'
import { convertToPrice } from './../../helpers/priceUtil'

function ListingItem(props) {
  function toggleListingHover(event) {
    let element = event.target
    while (element.className !== 'listingItem') {
      element = element.parentNode
    }

    let listingMarker = document.getElementById(`listing_marker_${element.id}`)
    listingMarker.classList.toggle('selected')
  }

  function listingOnClick(event) {
    let element = event.target
    while (element.className !== 'listingItem') {
      element = element.parentNode
    }

    window.open(`/listing?id=${element.id}`)
  }

  return (
    <div className='listingItem'
      id={props.listing.id}
      onMouseEnter={toggleListingHover}
      onMouseLeave={toggleListingHover}
      onClick={listingOnClick}>
      <ListingItemPicture picture_url={props.listing.display_picture_url} />
      <div className='listingItemBody'>
        <span className='listingItemPrice'>{convertToPrice(props.listing.price_idr)}</span>
        <div className='listingItemStatsContainer'>
          {
            props.listing.num_bedrooms &&
            <span className='listingItemStatsItem'>{Pluralize('Bed', props.listing.num_bedrooms, true)}</span>
          }
          {
            props.listing.num_bathrooms &&
            <span className='listingItemStatsItem'>{Pluralize('Bath', props.listing.num_bathrooms, true)}</span>
          }
          {
            props.listing.num_parking_spots &&
            <span className='listingItemStatsItem'>{Pluralize('Parking', props.listing.num_parking_spots, true)}</span>
          }
        </div>
        <span className='listingItemAddress'>{props.listing.address.full_address}</span>
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.listing.id === nextProps.listing.id
}

export default React.memo(ListingItem, areEqual)
