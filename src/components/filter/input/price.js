import React, { useState, useEffect } from 'react'

import './price.css'

function FilterInputPrice(props) {
  const [price, setPrice] = useState(props.listingFilter.price || {})

  function handleChangePriceMin(event) {
    if (!event.target.value) {
      const { min, ...priceRemaining } = price
      setPrice(priceRemaining)
      return
    }

    setPrice({ ...price, min: parseInt(event.target.value) })
  }

  function handleChangePriceMax(event) {
    if (!event.target.value) {
      const { max, ...priceRemaining } = price
      setPrice(priceRemaining)
      return
    }

    setPrice({ ...price, max: parseInt(event.target.value) })
  }

  useEffect(() => {
    props.onChange('price', price)
  }, [price])

  return (
    <div className='filterInputWrapper'>
      <div className='filterInputTitle'>Kisaran Harga</div>
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
