import React from 'react'
import GoogleMapReact from 'google-map-react';

import './container.css'

function MapContainer({ lat, long, zoom }) {
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
      />
    </div>
  )
}

export default MapContainer
