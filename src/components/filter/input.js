import React from 'react'

import './input.css'

function FilterInput(props) {
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

export default FilterInput
