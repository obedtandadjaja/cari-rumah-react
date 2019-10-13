import React from 'react'

function ListingAddress(props) {
  let addressComponents = []

  if (props.address_1) {
    addressComponents.push(
      <div key='listing_address_street' className='listingAddressStreet'>
        { props.address_1 } { props.address_2 }
      </div>
    )
  }

  if (props.administrative_area_level_4) {
    addressComponents.push(
      <div key='listing_address_village' className='listingAddressVillage'>
        { props.administrative_area_level_4 }
      </div>
    )
  }

  if (props.administrative_area_level_3) {
    addressComponents.push(
      <div key='listing_address_district' className='listingAddressDistrict'>
        { props.administrative_area_level_3 }
      </div>
    )
  }


  if (props.administrative_area_level_2) {
    addressComponents.push(
      <div key='listing_address_regency' className='listingAddressRegency'>
        { props.administrative_area_level_2 }
      </div>
    )
  }

  if (props.administrative_area_level_1 && props.zip_code) {
    addressComponents.push(
      <div key='listing_address_province' className='listingAddressProvince'>
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
