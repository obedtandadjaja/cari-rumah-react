import React from 'react'

import './container.css'
import ListingItem from './item'

const listings = [
  {
    type: 'Apartment',
    num_bedrooms: 2,
    num_bathrooms: 1,
    num_parking_spots: 1,
    price_cents: 12000000000,
    price_currency: 'IDR',
    display_picture: 'https://ssl.cdn-redfin.com/system_files/media/339690_JPG/genDesktopMapHomeCardUrl/item_40.jpg',
    address: {
      address_1: 'Jl. Pulau Pramuka 1 Blok P1/49, Taman Permata Buana',
      city: 'Jakarta',
      region: 'DKI Jakarta',
      zip_code: '11610',
      latitude: -6.187951,
      longitude: 106.733967
    }
  }
]

class ListingContainer extends React.Component {
  state = {
    batchSize: 20
  }

  render() {
    return(
      <div className='listingContainer'>
        <div className='listingContainerResultsCounter'>
          Menunjukkan {this.state.batchSize < listings.length ? this.state.batchSize : listings.length} dari {listings.length} listings
        </div>
        {
          listings.map(listing => {
            return (
              <ListingItem listing={listing} />
            )
          })
        }
      </div>
    )
  }
}

export default ListingContainer
