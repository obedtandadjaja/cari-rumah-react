import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'

import './container.css'
import FilterPopover from './popover'
import { changeListingFilter } from './../../actions/listingFilterActions'
import OutsideClickNotifier from './../../highOrderComponents/outsideClickNotifier'

function FilterContainer(props) {
  const refComponent = useRef()
  const [active, setActive] = useState(false)
  const [values, setValues] = useState(props.listingFilter)
  OutsideClickNotifier(
    (event) => setActive(false),
    refComponent
  )

  function filterButtonOnClick(event) {
    setActive(!active)
  }

  function handleFilterFieldChange(fieldId, value) {
    setValues({ ...values, [fieldId]: value })
  }

  function filterActionButtonOnClick() {
    props.changeListingFilter(values)
    setActive(false)
  }

  return (
    <div className='filterContainer' ref={refComponent}>
      <button
        className={ active ? 'filterButton active' : 'filterButton' }
        onClick={filterButtonOnClick}>
        { props.filterButtonTextResolver(props.listingFilter) }
      </button>
      <FilterPopover active={active}>
        {
          React.cloneElement(props.children, { onChange: handleFilterFieldChange, listingFilter: props.listingFilter })
        }
        {
          props.filterAction &&
          <div className='filterPopoverActionWrapper'>
            <button
              className='filterActionButton'
              onClick={filterActionButtonOnClick}>
              Filter
            </button>
          </div>
        }
      </FilterPopover>
    </div>
  )
}

const mapStateToProps = state => ({
  listingFilter: state.listingFilter.toJS(),
})
const mapDispatchToProps = { changeListingFilter }

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
