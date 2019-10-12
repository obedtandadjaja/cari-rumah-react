import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { PropagateLoader } from 'react-spinners'

import './detail.css'
import ListingAddress from './address'
import ListingInfo from './info'

function ListingDetail(props) {
  const QUERY = gql`
    query listing($id: ID!) {
      listing(id: $id) {
        id
        num_bedrooms
        num_bathrooms
        num_parking_spots
        lot_size_m2
        num_stories
        year_built
        price_idr
        description
        display_picture_url
        residential_type
        type
        address {
          address_1
          address_2
          city
          province
          zip_code
          longitude
          latitude
          full_address
        }
        user {
          name
          email
          phone
        }
      }
    }
  `

  const { error, data, loading } = useQuery(
    QUERY,
    {
      variables: {
        id: props.id
      }
    },
    [props.id]
  )

  let body = null
  if (loading) {
    body = (<PropagateLoader loading={true} />)
  } else if (error) {
    console.log(error)
  } else {
    body = (
      <>
        <div className='listingDetailHeader'>
          <ListingAddress { ...data.listing.address } />
          <div className='listingActions'>
            <div>
              Simpan Listing
            </div>
            <div>
              Kontak Pemilik
            </div>
            <div>
              Kirim Listing
            </div>
          </div>
        </div>
        <div className='listingDetailBody'>
          <ListingInfo {...data.listing} />
        </div>
      </>
    )
  }

  return (
    <div className='listingDetail'>
      { body }
    </div>
  )
}

export default ListingDetail
