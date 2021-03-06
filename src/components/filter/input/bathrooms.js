import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { changeBathroomsListingFilter } from './../../../actions/listingFilterActions'

function FilterInputBathrooms(props) {
  const [bathrooms, setBathrooms] = useState(props.listingFilter.bathrooms || {})

  function onBedroomFilterClick(event) {
    setBathrooms({ ...bathrooms, min: parseInt(event.target.id) })
  }

  useEffect(() => {
    props.changeBathroomsListingFilter(bathrooms.min, bathrooms.max)
  }, [bathrooms])

  let pills = []
  for (let i = 1; i <= 5; i++) {
    pills.push(
      <div
        key={i}
        id={i}
        className={bathrooms.min === i ? 'pill selected' : 'pill'}
        onClick={onBedroomFilterClick}>
        {i}+
      </div>
    )
  }

  return (
    <div className='filterInputWrapper'>
      <div className='filterInputTitle'>Toilet</div>
      <div className='pillList'>
        { pills }
      </div>
    </div>
  )
}

const mapDispatchToProps = { changeBathroomsListingFilter }

export default connect(null, mapDispatchToProps)(FilterInputBathrooms)
