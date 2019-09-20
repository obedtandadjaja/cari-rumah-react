import React from 'react'

import './search.css'
import MapContainer from './../components/map/container'
import ListingContainer from './../components/listing/container'

function Search() {
  const listingContainer = ListingContainer({
    lat: 0,
    long: 0,
    distance: 5
  })

  return (
    <div className='searchContainer'>
      <MapContainer />
      { listingContainer }
    </div>
  )
}

export default Search
