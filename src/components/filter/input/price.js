import React from 'react'

import './price.css'

function FilterInputPrice(props) {
  return (
    <div className='filterInputWrapper'>
      <span className='filterInputTitle'>Kisaran Harga</span>
      <div className='rangeInput'>
        <input placeholder='IDR Minimum' />
        <span>&nbsp;-&nbsp;</span>
        <input placeholder='IDR Maksimum' />
      </div>
    </div>
  )
}

export default FilterInputPrice
