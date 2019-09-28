import React from 'react'
import GoogleMapReact from 'google-map-react';

import './container.css'

function MapContainer({ lat, long, zoom }) {
  function onMapChange(event) {
    console.log(event)
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
          lat: lat,
          lng: long
        }}
        defaultZoom={zoom}
        onChange={onMapChange}
      />
    </div>
  )
}

export default MapContainer
