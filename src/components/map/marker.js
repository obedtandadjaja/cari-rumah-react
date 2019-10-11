import React from 'react'

import './marker.css'

function MapMarker(props) {
  return (
    <div
      id={ `listing_marker_${props.listingId}` }
      className='mapMarker'>
    </div>
  )
}

export default MapMarker
