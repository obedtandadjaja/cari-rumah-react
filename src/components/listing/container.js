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
      <div className='listingHeader'>
        <div className='filterList'>
          <div className='filterContainer'>
            <button className='filterButton'>Harga</button>
            <div className='filterPopover hidden'>
              <span className='filterPopoverArrow'></span>
              <div className='filterPopoverContent'>
                <div className='filterInputWrapper'>
                  <span className='filterInputTitle'>Kisaran Harga</span>
                  <div className='rangeInput'>
                    <input placeholder='Min' />
                    <span>&nbsp;-&nbsp;</span>
                    <input placeholder='Max' />
                  </div>
                </div>
              </div>
              <div className='filterPopoverActionWrapper'>
                <button className='filterActionButton'>Filter</button>
              </div>
            </div>
          </div>
          <div className='filterContainer'>
            <button className='filterButton'>Kamar</button>
          </div>
          <div className='filterContainer'>
            <button className='filterButton'>Toilet</button>
          </div>
          <div className='filterContainer'>
            <button className='filterButton'>Filter Lainnya</button>
          </div>
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
