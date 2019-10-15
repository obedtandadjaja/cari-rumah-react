import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { changeTypeListingFilter } from './../../../actions/listingFilterActions'

function FilterInputTypes(props) {
  const [type, setListingType] = useState(props.listingFilter.type)
  const POSSIBLE_TYPES = ['Kost', 'Jual']

  function onTypeFilterClick(event) {
    setListingType(event.target.id)
  }

  useEffect(() => {
    props.changeTypeListingFilter(type)
  }, [type])

  let pills = []
  POSSIBLE_TYPES.map(possibleType =>
    pills.push(
      <div
        key={possibleType}
        id={possibleType}
        className={possibleType === type ? 'pill selected' : 'pill' }
        onClick={onTypeFilterClick}>
        { possibleType }
      </div>
    )
  )

  return (
    <div className='filterInputWrapper'>
      <div className='filterInputTitle'>Tipe Listing</div>
      <div className='pillList'>
        { pills }
      </div>
    </div>
  )
}

const mapDispatchToProps = { changeTypeListingFilter }

export default connect(null, mapDispatchToProps)(FilterInputTypes)
