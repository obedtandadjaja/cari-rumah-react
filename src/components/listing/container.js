import React from 'react'
import { connect } from 'react-redux'
import { PropagateLoader } from 'react-spinners'

import './container.css'
import ListingList from './list'
import FilterList from './../filter/list'

function ListingContainer(props) {
  let body = null
  if (!props.mapBounds.ne || !props.mapBounds.sw) {
    body = (<PropagateLoader loading={true} />)
  } else {
    body = (<ListingList mapBounds={props.mapBounds} />)
  }

  return (
    <div className='listingContainer'>
      <div className='listingHeader'>
        <FilterList listingFilter={props.listingFilter} />
      </div>
      <div className='listingBody'>
        { body }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  mapBounds: state.mapChange.getIn(['mapChange', 'mapBounds']),
  listingFilter: state.listingFilter.toJS()
})

export default React.memo(connect(mapStateToProps, {})(ListingContainer))
