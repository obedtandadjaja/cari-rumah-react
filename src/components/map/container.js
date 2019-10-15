import React from 'react'
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

import './container.css'
import { changeMapBounds } from './../../actions/mapChangeActions'
import MapMarker from './marker'

const QUERY = gql`
  query listings($ne: Coordinate!, $sw: Coordinate!, $filter: ListingFilter) {
    listingsByAddressLatLongRectangle(ne: $ne, sw: $sw, filter: $filter) {
      edges {
        node {
          id
          price_idr
          address {
            longitude
            latitude
          }
        }
      }
    }
  }
`

function MapContainer(props) {
  const { error, data } = useQuery(
    QUERY,
    {
      skip: !props.mapBounds.ne,
      variables: {
        ne: {
          lat: props.mapBounds.ne && props.mapBounds.ne.lat,
          long: props.mapBounds.ne && props.mapBounds.ne.long
        },
        sw: {
          lat: props.mapBounds.sw && props.mapBounds.sw.lat,
          long: props.mapBounds.sw && props.mapBounds.sw.long
        },
        filter: {
          price_idr_min: props.priceFilter.min,
          price_idr_max: props.priceFilter.max,
          num_bedrooms_min: props.bedroomsFilter.min,
          num_bedrooms_max: props.bedroomsFilter.max,
          num_bathrooms_min: props.bathroomsFilter.min,
          num_bathrooms_max: props.bathroomsFilter.max,
          year_built_min: props.yearBuiltFilter.min,
          year_built_max: props.yearBuiltFilter.max,
          type: props.typeFilter,
          residential_type: props.residentialTypeFilter,
        },
      },
    }
  )

  function mapOptions(maps) {
    return {
      mapTypeControl: true,
      fullscreenControl: false,
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.MapTypeControlStyle.DROPDOWN_MENU,
      },
    }
  }

  function onMapChange(event) {
    props.changeMapBounds(event.marginBounds)
  }

  let listings = []
  if (data) {
    data.listingsByAddressLatLongRectangle.edges.forEach(listing =>
      listings.push(
        <MapMarker
          listingId={listing.node.id}
          listingPriceIdr={listing.node.price_idr}
          key={listing.node.id}
          lat={listing.node.address.latitude}
          lng={listing.node.address.longitude} />
      )
    )
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
        options={mapOptions}>
        { listings }
      </GoogleMapReact>
    </div>
  )
}

const mapStateToProps = state => ({
  priceFilter: state.listingFilter.getIn(['price']),
  bedroomsFilter: state.listingFilter.getIn(['bedrooms']),
  bathroomsFilter: state.listingFilter.getIn(['bathrooms']),
  typeFilter: state.listingFilter.getIn(['type']),
  residentialTypeFilter: state.listingFilter.getIn(['residentialType']),
  yearBuiltFilter: state.listingFilter.getIn(['yearBuilt']),
  mapBounds: state.mapChange.getIn(['mapChange', 'mapBounds'])
})
const mapDispatchToProps = { changeMapBounds }

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
