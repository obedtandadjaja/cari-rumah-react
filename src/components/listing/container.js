import React from 'react'
import { connect } from 'react-redux'
import { PropagateLoader } from 'react-spinners'

import './container.css'
import ListingList from './list'
import FilterContainer from './../filter/container'

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
        <div className='filterList'>
          <FilterContainer />
        </div>
      </div>
      <div className='listingBody'>
        { body }
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return (prevProps.mapBounds.ne && prevProps.mapBounds.sw) === (nextProps.mapBounds.ne && nextProps.mapBounds.sw)
}

const mapStateToProps = state => ({
  mapBounds: state.mapChange.getIn(['mapChange', 'mapBounds'])
})

export default React.memo(connect(mapStateToProps, {})(ListingContainer), areEqual)
