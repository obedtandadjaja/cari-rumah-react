import React from 'react'

import './search-container.css'
import MapContainer from './map/map-container'

class SearchContainer extends React.Component {
  render() {
    return (
      <div className='searchContainer'>
        <MapContainer />
      </div>
    )
  }
}

export default SearchContainer
