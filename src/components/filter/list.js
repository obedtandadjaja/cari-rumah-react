import React from 'react'

import './list.css'
import Autocomplete from './../autocomplete/autocomplete'
import FilterPriceContainer from './../filter/priceContainer'
import FilterBedroomsContainer from './../filter/bedroomsContainer'

function FilterList(props) {
  return (
    <div className='filterList'>
      <Autocomplete mini={true} />
      <FilterPriceContainer />
      <FilterBedroomsContainer />
    </div>
  )
}

export default FilterList
