import React from 'react'
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'

import './container.css'
import { changeMapBounds } from './../../actions/mapChangeActions'

function MapContainer(props) {
  function onMapChange(event) {
    props.changeMapBounds(event.marginBounds)
  }

  return (
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          language: 'id',
          region: 'ind'
        }}
        defaultCenter={{
          lat: props.lat,
          lng: props.long
        }}
        defaultZoom={13}
        onChange={onMapChange}
      />
    </div>
  )
}

const mapDispatchToProps = {
  changeMapBounds
}

export default connect(null, mapDispatchToProps)(MapContainer)
