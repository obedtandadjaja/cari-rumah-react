import React from 'react'

import FilterContainer from './container'
import FilterInputBathrooms from './input/bathrooms'

function FilterBathroomsContainer(props) {
  const filterButtonTextResolver = (values) => {
    if (values.bathrooms) {
      if (values.bathrooms.min) {
        return `Toilet: ${values.bathrooms.min}+`
      }
      return 'Toilet'
    }
  }

  return (
    <FilterContainer filterButtonTextResolver={filterButtonTextResolver}>
      <FilterInputBathrooms />
    </FilterContainer>
  )
}

export default FilterBathroomsContainer
