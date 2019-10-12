import React from 'react'

function ListingAddress(props) {
  let addressComponents = []

  if (props.address_1) {
    addressComponents.push(
      <div className='listingAddressStreet'>
        { props.address_1 } { props.address_2 }
      </div>
    )
  }

  if (props.administrative_area_4) {
    addressComponents.push(
      <div className='listingAddressVillage'>
        { props.administrative_area_level_4 }
      </div>
    )
  }

  if (props.administrative_area_3) {
    addressComponents.push(
      <div className='listingAddressDistrict'>
        { props.administrative_area_level_3 }
      </div>
    )
  }


  if (props.administrative_area_2) {
    addressComponents.push(
      <div className='listingAddressRegency'>
        { props.administrative_area_level_2 }
      </div>
    )
  }

  if (props.administrative_area_1 && props.zip_code) {
    addressComponents.push(
      <div className='listingAddressProvince'>
        { props.administrative_area_level_1 } { props.zip_code }
      </div>
    )
  }

  return (
    <div className='listingAddress'>
      { addressComponents }
    </div>
  )
}

export default ListingAddress
