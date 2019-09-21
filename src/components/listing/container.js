import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { PropagateLoader } from 'react-spinners'

import './container.css'
import ListingList from './list'

const QUERY = gql`
  query listings($lat: Float!, $long: Float!, $distance: Float!) {
    listingsByAddressLatLongDistance(lat: $lat, long: $long, distance: $distance) {
      id
      num_bedrooms
      num_bathrooms
      lot_size_m2
      price_idr
      residential_type
      type
      address {
        full_address
      }
    }
  }
`

function ListingContainer({ lat, long, distance }) {
  const { loading, error, data } = useQuery(QUERY, { variables: { lat, long, distance }})

  let body = null
  if (loading) {
    body = (<PropagateLoader loading={true} />)
  } else if (error) {
    body = (<span role='img'>Waduh payah nih websitenya ada yang eror... 😭</span>)
  } else {
    body = (
      <>
        <div className='listingContainerResultsCounter'>
          Menunjukkan {data.listingsByAddressLatLongDistance.length} dari {data.listingsByAddressLatLongDistance.length}
        </div>
        <ListingList listings={data.listingsByAddressLatLongDistance} />
      </>
    )
  }

  return (
    <div className='listingContainer'>
      { body }
    </div>
  )
}

export default ListingContainer
