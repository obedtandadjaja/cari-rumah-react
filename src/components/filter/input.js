import React from 'react'

import './input.css'

function FilterInput(props) {
  return (
    <div className='filterInputWrapper'>
      <span className='filterInputTitle'>Kisaran Harga</span>
      <div className='rangeInput'>
        <input placeholder='Min' />
        <span>&nbsp;-&nbsp;</span>
        <input placeholder='Max' />
      </div>
    </div>
  )
}

export default FilterInput
