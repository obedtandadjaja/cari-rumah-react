import React from 'react'
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'

import './container.css'
import { changeMapBounds } from './../../actions/mapChangeActions'

function MapContainer(props) {
  function onMapChange(event) {
    props.changeMapBounds(event.marginBounds)
  }

  console.log(props)

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

function areEqual(prevProps, nextProps) {
  return prevProps.lat && prevProps.long && nextProps.lat && nextProps.long
}

const mapDispatchToProps = {
  changeMapBounds
}

export default React.memo(connect(null, mapDispatchToProps)(MapContainer), areEqual)
