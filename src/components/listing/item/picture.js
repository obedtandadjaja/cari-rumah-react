import React from 'react'

import './picture.css'

function ListingItemPicture(props) {
  if (props.picture_url) {
    return (
      <div className='listingItemPicture' style={{backgroundImage: `url(${props.picture_url})`}} />
    )
  }

  return (<></>)
}

export default ListingItemPicture
