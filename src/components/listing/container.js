import React from 'react'
import { connect } from 'react-redux'
import { PropagateLoader } from 'react-spinners'

import './container.css'
import ListingList from './list'

function ListingContainer(props) {
  let body = null
  if (!props.mapBounds.ne || !props.mapBounds.sw) {
    body = (<PropagateLoader loading={true} />)
  } else {
    body = (<ListingList mapBounds={props.mapBounds} />)
  }

  return (
    <div className='listingContainer'>
      { body }
    </div>
  )
}

const mapStateToProps = state => ({
  mapBounds: state.mapChange.getIn(['mapChange', 'mapBounds'])
})

export default connect(mapStateToProps, {})(ListingContainer)
