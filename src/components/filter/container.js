import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import './container.css'
import FilterPopover from './popover'
import { changeListingFilter } from './../../actions/listingFilterActions'

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

  console.log(props.listingFilter)

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

function OutsideClickNotifier(func, refComponent) {
  useEffect(() => {
    function handleClick(event) {
      refComponent.current
      && !refComponent.current.contains(event.target)
      && func(event)
    }

    if (refComponent.current) {
      document.addEventListener('click', handleClick)
    }

    // on unmount, remove the listener
    return () => document.removeEventListener('click', handleClick)
  }, [func, refComponent])
}

const mapStateToProps = state => ({
  listingFilter: state.listingFilter.toJS(),
})
const mapDispatchToProps = { changeListingFilter }

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
