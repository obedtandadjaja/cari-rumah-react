import React from 'react'

import FilterContainer from './container'
import FilterInputPrice from './input/price'

function FilterPriceContainer(props) {
  const filterButtonTextResolver = (props) => {
    if (props.price) {
      if (props.price.min && !props.price.max) {
        return '> ' + props.price.min
      } else if (!props.price.min && props.price.max) {
        return '< ' + props.price.max
      } else if (props.price.min && props.price.max) {
        let prices = [props.price.min, props.price.max]
        return prices.join(' - ')
      }
    }
    return 'Harga'
  }

  return (
    <FilterContainer listingFilter={props.listingFilter} filterButtonTextResolver={filterButtonTextResolver}>
      <FilterInputPrice />
    </FilterContainer>
  )
}

export default FilterPriceContainer
