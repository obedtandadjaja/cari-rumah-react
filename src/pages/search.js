import React from 'react'

import './search.css'
import MapContainer from './../components/map/container'
import ListingContainer from './../components/listing/container'

function Search() {
  return (
    <div className='searchContainer'>
      <MapContainer />
      {
        ListingContainer({
          lat: 0,
          long: 0,
          distance: 5
        })
      }
    </div>
  )
}

export default Search
