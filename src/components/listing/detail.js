import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { PropagateLoader } from 'react-spinners'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

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
        picture_urls
        residential_type
        type
        address {
          address_1
          address_2
          administrative_area_level_4
          administrative_area_level_3
          administrative_area_level_2
          administrative_area_level_1
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
    /* const images = data.listing.picture_urls.map(picture_url => ({ original: picture_url })) */
    const images = [
      {
        original: 'https://ssl.cdn-redfin.com/photo/8/mbpaddedwide/739/genMid.ML81765739_39_3.jpg'
      },
      {
        original: 'https://kenikin.com/w/luxury-home-Wallpaper-number-Xfw.jpg'
      },
      {
        original: 'http://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Luxury_Home_HD_Photo.jpg'
      },
      {
        original: 'https://live.staticflickr.com/2939/14809337183_77e551331e_b.jpg'
      }
    ]

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
          <ImageGallery
            lazyLoad={true}
            showPlayButton={false}
            showBullets={true}
            showThumbnails={false}
            showIndex={true}
            items={images} />
          <ListingInfo {...data.listing} />
          <div className='listingDescription'>
            { data.listing.description }
          </div>
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
