import React from 'react'

import './search-container.css'
import MapContainer from './map/container'
import ListingContainer from './listing/container'

class SearchContainer extends React.Component {
  render() {
    return (
      <div className='searchContainer'>
        <MapContainer />
        <ListingContainer />
      </div>
    )
  }
}

export default SearchContainer
