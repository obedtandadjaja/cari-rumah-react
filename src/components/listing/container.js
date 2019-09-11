import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'

import './container.css'
import ListingItem from './item'
import environment from './../../create-relay-environment'

class ListingContainer extends React.Component {
  state = {
    batchSize: 20
  }

  renderQuery = (error, props) => {
    if (error) {
      return (<div className='listingContainer'></div>)
    } else if (props) {
      return (
        <div className='listingContainer'>
          <div className='listingContainerResultsCounter'>
          Menunjukkan {this.state.batchSize < props.addressesByLongLatDistance.length ? this.state.batchSize : props.addressesByLongLatDistance.length} dari {props.addressesByLongLatDistance.length}
        </div>
          {
            props.addressesByLongLatDistance.map(listing => {
              return (
                  <ListingItem listing={listing} />
              )
            })
          }
        </div>
      )
    }
  }

  render() {
    return (
      <QueryRenderer
      environment={environment}
      query={
        graphql`
          query containerAddressesByLongLatDistanceQuery($lat: Float, $long: Float, $distance: Float) {
            addressesByLongLatDistance(lat: $lat, long: $long, distance: $distance) {
              address_1
              address_2
              city
              region
              zip_code
              latitude
              longitude
            }
          }
        `
      }
      variables={{lat: 34.0409301, long: -118.2574062, distance: 10}}
      render={this.renderQuery}
      />
    )
  }

}

export default ListingContainer
