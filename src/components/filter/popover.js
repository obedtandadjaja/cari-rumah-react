import React from 'react'

import './popover.css'

function FilterPopover(props) {
  return (
    <div className={ props.active ? 'filterPopover' : 'filterPopover hidden' }>
      <span className='filterPopoverArrow'></span>
      <div className='filterPopoverContent'>
        { props.children }
      </div>
    </div>
  )
}

export default FilterPopover
