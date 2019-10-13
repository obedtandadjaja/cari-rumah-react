import React from 'react'

import './info.css'
import { convertToPrice } from './../../helpers/priceUtil'

function ListingInfo(props) {
  let infos = []

  function constructListingInfo(key, title, value, additionalInfo) {
    return (
      <div key={key} className='listingInfoItem'>
        <div className='listingInfoTitle'>
          { title }
        </div>
        <div className='listingInfoValue'>
          { value }
        </div>
        {
          additionalInfo &&
          <div className='listingInfoAdditional'>
            { additionalInfo }
          </div>
        }
      </div>
    )
  }

  if (props.price_idr) {
    let value = convertToPrice(props.price_idr)
    let additionalInfo = null

    if (props.type === 'Jual' && props.lot_size_m2) {
      let pricePerLotSize = convertToPrice(props.price_idr / props.lot_size_m2)
      additionalInfo = `${pricePerLotSize} / m2`
    }

    infos.push(constructListingInfo('listing_info_item_price', 'Harga', value, additionalInfo))
  }

  if (props.num_bedrooms) {
    infos.push(constructListingInfo('listing_info_item_num_bedrooms', 'Kamar', props.num_bedrooms))
  }

  if (props.num_bathrooms) {
    infos.push(constructListingInfo('listing_info_item_num_bathrooms', 'Toilet', props.num_bathrooms))
  }

  if (props.num_stories) {
    infos.push(constructListingInfo('listing_info_item_num_stories', 'Lantai', props.num_stories))
  }

  if (props.lot_size_m2) {
    infos.push(constructListingInfo('listing_info_item_lot_size', 'Area', `${props.lot_size_m2} m2`))
  }

  if (props.year_built) {
    infos.push(constructListingInfo('listing_info_item_year_built', 'Tahun Jadi', props.year_built))
  }

  return (
    <div className='listingInfo'>
      { infos }
    </div>
  )
}

export default ListingInfo
