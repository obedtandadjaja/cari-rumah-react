import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { PropagateLoader } from 'react-spinners'

import './list.css'
import ListingItem from './item'

const QUERY = gql`
  query listings($ne: Coordinate!, $sw: Coordinate!, $sortBy: ListingSortBy, $sortDirection: SortDirection, $pagination: PaginationInput) {
    listingsByAddressLatLongRectangle(ne: $ne, sw: $sw, sortBy: $sortBy, sortDirection: $sortDirection, pagination: $pagination) {
      edges {
        node {
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
      pageInfo {
        endCursor
      }
    }
  }
`

function ListingList(props) {
  console.log(props)

  const { loading, error, data } = useQuery(
    QUERY,
    {
      variables: {
        ne: {
          lat: props.mapBounds.ne.lat,
          long: props.mapBounds.ne.long
        },
        sw: {
          lat: props.mapBounds.sw.lat,
          long: props.mapBounds.sw.long
        },
        pagination: {
          batchSize: 20,
          after: null
        }
      }
    }
  )

  let body = null
  if (loading) {
    body = (<PropagateLoader loading={true} />)
  } else if (error) {
    body = (<span role='img'>Waduh payah nih websitenya ada yang eror... 😭</span>)
  } else if (data.listingsByAddressLatLongRectangle.length === 0) {
    body = (
      <div className='listingItem' style={{padding:'10px'}}>
        <span role='img'>Mohon maap nih ga ketemu listing di daerah situ... 😭</span>
      </div>
    )
  } else {
    body = (
      <>
        <div className='listingContainerResultsCounter'>
          Menunjukkan {data.listingsByAddressLatLongRectangle.edges.length} dari {data.listingsByAddressLatLongRectangle.edges.length}
        </div>
        {
          data.listingsByAddressLatLongRectangle.edges.map(listing =>
            <ListingItem key={listing.node.id} listing={listing.node} />
          )
        }
      </>
    )
  }

  return (
    <div className='listingsList'>
      { body }
    </div>
  )
}

export default ListingList
