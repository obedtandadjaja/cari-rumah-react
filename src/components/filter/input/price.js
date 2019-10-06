import React, { useState, useEffect } from 'react'

import './price.css'

function FilterInputPrice(props) {
  const [price, setPrice] = useState({})

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

    setPrice({ ...price, max: parseInt(event.target.value.parseInt) })
  }

  useEffect(() => {
    props.onChange('price', price)
  }, [price])

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
