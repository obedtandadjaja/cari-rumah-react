import React from 'react'
import { connect } from 'react-redux'

import './list.css'
import FilterPriceContainer from './../filter/priceContainer'
import Autocomplete from './../autocomplete/autocomplete'

function FilterList(props) {
  return (
    <div className='filterList'>
      <Autocomplete mini={true} />
      <FilterPriceContainer listingFilter={props.listingFilter} />
    </div>
  )
}

const mapStateToProps = state => ({
  listingFilter: state.listingFilter.toJS()
})

export default connect(mapStateToProps, {})(FilterList)
