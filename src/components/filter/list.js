import React from 'react'

import './list.css'
import Autocomplete from './../autocomplete/autocomplete'
import FilterBedroomsContainer from './../filter/bedroomsContainer'
import FilterBathroomsContainer from './../filter/bathroomsContainer'
import FilterPriceContainer from './../filter/priceContainer'
import FilterResidentialTypesContainer from './../filter/residentialTypesContainer'
import FilterTypesContainer from './../filter/typesContainer'

function FilterList(props) {
  return (
    <div className='filterList'>
      {
        window.innerWidth <= 900 &&
          <Autocomplete mini={true} />
      }
      <FilterPriceContainer />
      <FilterBedroomsContainer />
      <FilterBathroomsContainer />
      <FilterTypesContainer />
      <FilterResidentialTypesContainer />
    </div>
  )
}

export default FilterList
