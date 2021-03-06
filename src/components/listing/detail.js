import React from 'react'
import { useQuery } from 'react-apollo'
import { PropagateLoader } from 'react-spinners'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import GoogleMapReact from 'google-map-react';

import './detail.css'
import { QUERY_LISTING_BY_ID } from './../../graphqlQuery'
import ListingActions from './actions'
import ListingAddress from './address'
import ListingInfo from './info'
import MapMarker from './../map/marker'

function ListingDetail(props) {
  const { error, data, loading } = useQuery(
    QUERY_LISTING_BY_ID,
    {
      variables: {
        id: props.id
      }
    },
    [props.id]
  )

  function mapOptions(maps) {
    return {
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.MapTypeControlStyle.DROPDOWN_MENU,
      },
    }
  }

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
          <ListingActions />
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
          <div className='mapContainerMini'>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                language: 'id',
                region: 'ind'
              }}
              defaultCenter={{
                lat: data.listing.address.latitude,
                lng: data.listing.address.longitude
              }}
              defaultZoom={16}
              options={mapOptions}>
              <MapMarker
                lat={data.listing.address.latitude}
                lng={data.listing.address.longitude} />
            </GoogleMapReact>
          </div>
          <ListingAddress { ...data.listing.address } />
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
