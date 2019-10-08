import React, { useEffect, useRef } from 'react'

import './popover.css'

function FilterPopover(props) {
  const refComponent = useRef()

  useEffect(() => {
    if(window.innerWidth <= refComponent.current.getBoundingClientRect().right)
      refComponent.current.style.right = 0
  }, [refComponent, window.innerWidth])

  return (
    <div
      ref={refComponent}
      className={ props.active ? 'filterPopover' : 'filterPopover hidden' } >
      <span className='filterPopoverArrow'></span>
      <div className='filterPopoverContent'>
        { props.children }
      </div>
    </div>
  )
}

export default FilterPopover
