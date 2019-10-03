import React, { useState } from 'react'

import './container.css'
import FilterPopover from './popover'
import FilterInput from './input'

function FilterContainer(props) {
  const [active, setActive] = useState(false)

  function filterButtonOnClick(event) {
    setActive(!active)
  }

  return (
    <div className='filterContainer'>
      <button className='filterButton' onClick={filterButtonOnClick}>Harga</button>
      <FilterPopover active={active}>
        <FilterInput />
      </FilterPopover>
    </div>
  )
}

export default FilterContainer
