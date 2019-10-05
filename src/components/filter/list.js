import React from 'react'

import './list.css'
import FilterPriceContainer from './../filter/priceContainer'
import Autocomplete from './../autocomplete/autocomplete'

function FilterList(props) {
  return (
    <div className='filterList'>
      <Autocomplete mini={true} />
      <FilterPriceContainer listingFilter={props.listingFilter} />
    </div>
  )
}

export default FilterList
