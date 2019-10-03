import React from 'react'

import './container.css'
import FilterPopover from './popover'
import FilterInput from './input'

function FilterContainer(props) {
  return (
    <div className='filterContainer'>
      <button className='filterButton'>Harga</button>
      <FilterPopover>
        <FilterInput />
      </FilterPopover>
    </div>
  )
}

export default FilterContainer
