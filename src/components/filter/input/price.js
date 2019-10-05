import React, { useState } from 'react'

import './price.css'

function FilterInputPrice(props) {
  const [price, setPrice] = useState({})

  function handleChangePriceMin(event) {
    setPrice({ ...price, min: event.target.value })
    props.onChange('price', price)
  }

  function handleChangePriceMax(event) {
    setPrice({ ...price, max: event.target.value })
    props.onChange('price', price)
  }

  return (
    <div className='filterInputWrapper'>
      <span className='filterInputTitle'>Kisaran Harga</span>
      <div className='rangeInput'>
        <input
          type='number'
          placeholder={ props.listingFilter.price.min ? props.listingFilter.price.min : 'IDR Minimum' }
          onChange={handleChangePriceMin} />
        <span>&nbsp;-&nbsp;</span>
        <input
          type='number'
          placeholder={ props.listingFilter.price.max ? props.listingFilter.price.max : 'IDR Maksimum' }
          onChange={handleChangePriceMax} />
      </div>
    </div>
  )
}

export default FilterInputPrice
