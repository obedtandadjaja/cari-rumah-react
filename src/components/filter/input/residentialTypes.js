import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './residentialTypes.css'
import { changeResidentialTypeListingFilter } from './../../../actions/listingFilterActions'

function FilterInputResidentialTypes(props) {
  const [residentialType, setResidentialType] = useState(props.listingFilter.residentialType)
  const POSSIBLE_RESIDENTIAL_TYPES = ['Rumah', 'Apartemen', 'Kamar']

  function onResidentialTypeFilterClick(event) {
    setResidentialType(event.target.id)
  }

  useEffect(() => {
    props.changeResidentialTypeListingFilter(residentialType)
  }, [residentialType])

  let pills = []
  POSSIBLE_RESIDENTIAL_TYPES.map(possibleResidentialType =>
    pills.push(
      <div
        key={possibleResidentialType}
        id={possibleResidentialType}
        className={possibleResidentialType === residentialType ? 'filterPill selected' : 'filterPill' }
        onClick={onResidentialTypeFilterClick}>
        { possibleResidentialType }
      </div>
    )
  )

  return (
    <div className='filterInputWrapper'>
      <span className='filterInputTitle'>Tipe Listing</span>
      <div className='filterPillList'>
        { pills }
      </div>
    </div>
  )
}

const mapDispatchToProps = { changeResidentialTypeListingFilter }

export default connect(null, mapDispatchToProps)(FilterInputResidentialTypes)
