import gql from 'graphql-tag'

export const QUERY_LISTING_BY_ID = gql`
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
