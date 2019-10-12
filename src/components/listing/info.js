import React from 'react'

import './info.css'
import { convertToPrice } from './../../helpers/priceUtil'

function ListingInfo(props) {
  let infos = []

  function constructListingInfo(title, value, additionalInfo) {
    return (
      <div className='listingInfoItem'>
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

    infos.push(constructListingInfo('Harga', value, additionalInfo))
  }

  if (props.num_bedrooms) {
    infos.push(constructListingInfo('Kamar', props.num_bedrooms))
  }

  if (props.num_bathrooms) {
    infos.push(constructListingInfo('Toilet', props.num_bathrooms))
  }

  if (props.num_stories) {
    infos.push(constructListingInfo('Lantai', props.num_stories))
  }

  if (props.lot_size_m2) {
    infos.push(constructListingInfo('Area', `${props.lot_size_m2} m2`))
  }

  if (props.year_built) {
    infos.push(constructListingInfo('Tahun Jadi', props.year_built))
  }

  return (
    <div className='listingInfo'>
      { infos }
    </div>
  )
}

export default ListingInfo
