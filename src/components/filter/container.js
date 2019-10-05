import React, { useState } from 'react'

import './container.css'
import FilterPopover from './popover'
import FilterInputPrice from './input/price'

function FilterContainer(props) {
  const [active, setActive] = useState(false)

  function filterButtonOnClick(event) {
    setActive(!active)
  }

  return (
    <div className='filterContainer'>
      <button className='filterButton' onClick={filterButtonOnClick}>Harga</button>
      <FilterPopover active={active}>
        <FilterInputPrice />
        <div className='filterPopoverActionWrapper'>
          <button className='filterActionButton'>Filter</button>
        </div>
      </FilterPopover>
    </div>
  )
}

export default FilterContainer
