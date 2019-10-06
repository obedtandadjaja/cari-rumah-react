import React from 'react'

import FilterContainer from './container'
import FilterInputPrice from './input/price'

function FilterPriceContainer(props) {
  const filterButtonTextResolver = (values) => {
    if (values.price) {
      if (values.price.min && values.price.max) {
        let prices = [values.price.min, values.price.max]
        return prices.join(' - ')
      } else if (values.price.min && !values.price.max) {
        return '> ' + values.price.min
      } else if (!values.price.min && values.price.max) {
        return '< ' + values.price.max
      }
    }
    return 'Harga'
  }

  return (
    <FilterContainer filterButtonTextResolver={filterButtonTextResolver} filterAction={true}>
      <FilterInputPrice />
    </FilterContainer>
  )
}

export default FilterPriceContainer
