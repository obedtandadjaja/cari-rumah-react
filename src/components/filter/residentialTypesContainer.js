import React from 'react'

import FilterContainer from './container'
import FilterInputResidentialTypes from './input/residentialTypes'

function FilterResidentialTypesContainer(props) {
  const filterButtonTextResolver = (values) => {
    if (values.type) {
      return values.type
    }
    return 'Tipe Residensi'
  }

  return (
    <FilterContainer filterButtonTextResolver={filterButtonTextResolver}>
      <FilterInputResidentialTypes />
    </FilterContainer>
  )
}

export default FilterResidentialTypesContainer
