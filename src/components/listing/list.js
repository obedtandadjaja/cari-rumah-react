import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'

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
          display_picture_url
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
  console.log(props.mapBounds)

  const { error, data } = useQuery(
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

  if (error) {
    return (<p>{ JSON.stringify(error) }</p>)
    /* return (<span role='img'>Waduh payah nih websitenya ada yang eror... 😭</span>) */
  } else if (data && data.listingsByAddressLatLongRectangle.length === 0) {
    return (
      <div className='listingList'>
        <div className='listingItem' style={{padding:'10px'}}>
          <span role='img'>Mohon maap nih ga ketemu listing di daerah situ... 😭</span>
        </div>
      </div>
    )
  } else if (data) {
    return (
      <>
        <div className='listingList'>
        {
          data.listingsByAddressLatLongRectangle.edges.map(listing =>
            <ListingItem key={listing.node.id} listing={listing.node} />
          )
        }
        </div>
      </>
    )
  }

  return (<></>)
}

export default ListingList
