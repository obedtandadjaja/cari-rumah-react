import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './bedrooms.css'
import { changeBedroomsListingFilter } from './../../../actions/listingFilterActions'

function FilterInputBedrooms(props) {
  const [bedrooms, setBedrooms] = useState(props.listingFilter.bedrooms || {})

  function onBedroomFilterClick(event) {
    setBedrooms({ ...bedrooms, min: parseInt(event.target.id) })
  }

  useEffect(() => {
    props.changeBedroomsListingFilter(bedrooms.min, bedrooms.max)
  }, [bedrooms])

  let pills = []
  for (let i = 1; i <= 5; i++) {
    pills.push(
      <div
        id={i}
        className={bedrooms.min === i ? 'filterPill selected' : 'filterPill'}
        onClick={onBedroomFilterClick}>
        {i}+
      </div>
    )
  }

  return (
    <div className='filterInputWrapper'>
      <span className='filterInputTitle'>Kamar</span>
      <div className='filterPillList'>
        { pills }
      </div>
    </div>
  )
}

const mapDispatchToProps = { changeBedroomsListingFilter }

export default connect(null, mapDispatchToProps)(FilterInputBedrooms)
