import React from 'react'

import './marker.css'
import { convertToPriceShort } from './../../helpers/priceUtil'

function MapMarker(props) {
  return (
    <div
      id={ `listing_marker_${props.listingId}` }
      className='mapMarker'>
      <div className='mapMarkerDetails'>
        <span>{ convertToPriceShort(props.listingPriceIdr) }</span>
      </div>
    </div>
  )
}

export default MapMarker
