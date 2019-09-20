import React from 'react'

import './search-container.css'
import MapContainer from './map/container'
import ListingContainer from './listing/container'

class SearchContainer extends React.Component {
  render() {
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
}

export default SearchContainer
