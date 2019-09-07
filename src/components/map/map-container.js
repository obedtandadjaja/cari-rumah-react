import React from 'react'
import GoogleMapReact from 'google-map-react';

import './map-container.css'

class MapContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: -6.187951,
      lng: 106.733967
    },
    zoom: 13
  }

  render() {
    console.log(process.env)
    return (
      <div className='mapContainer'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            language: 'id',
            region: 'ind'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    )
  }
}

export default MapContainer
