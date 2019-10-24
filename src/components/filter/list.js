import React from 'react'

import './list.css'
import FilterBedroomsContainer from './../filter/bedroomsContainer'
import FilterBathroomsContainer from './../filter/bathroomsContainer'
import FilterPriceContainer from './../filter/priceContainer'
import FilterResidentialTypesContainer from './../filter/residentialTypesContainer'
import FilterTypesContainer from './../filter/typesContainer'

function FilterList(props) {
  return (
    <div className='filterList'>
      <FilterPriceContainer />
      <FilterBedroomsContainer />
      <FilterBathroomsContainer />
      <FilterTypesContainer />
      <FilterResidentialTypesContainer />
    </div>
  )
}

export default FilterList
