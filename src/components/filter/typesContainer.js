import React from 'react'

import FilterContainer from './container'
import FilterInputTypes from './input/types'

function FilterTypesContainer(props) {
  const filterButtonTextResolver = (values) => {
    if (values.type) {
      return values.type
    }
    return 'Tipe Listing'
  }

  return (
    <FilterContainer filterButtonTextResolver={filterButtonTextResolver}>
      <FilterInputTypes />
    </FilterContainer>
  )
}

export default FilterTypesContainer
