import React from 'react'

import FilterContainer from './container'
import FilterInputBedrooms from './input/bedrooms'

function FilterBedroomsContainer(props) {
  const filterButtonTextResolver = (values) => {
    if (values.bedrooms) {
      if (values.bedrooms.min) {
        return `Kamar: ${values.bedrooms.min}+`
      }
      return 'Kamar'
    }
  }

  return (
    <FilterContainer filterButtonTextResolver={filterButtonTextResolver}>
      <FilterInputBedrooms />
    </FilterContainer>
  )
}

export default FilterBedroomsContainer
