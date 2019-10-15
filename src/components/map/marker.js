import React from 'react'

import './marker.css'
import { convertToPriceShort } from './../../helpers/priceUtil'

function MapMarker(props) {
  function markerOnClick(event) {
    window.open(`/listing?id=${event.target.id.replace('listing_marker_', '')}`)
  }

  return (
    <div
      id={ `listing_marker_${props.listingId}` }
      onClick={markerOnClick}
      className='mapMarker'>
      {
        props.listingPriceIdr &&
        <div className='mapMarkerDetails'>
          <span>{ convertToPriceShort(props.listingPriceIdr) }</span>
        </div>
      }
    </div>
  )
}

export default MapMarker
