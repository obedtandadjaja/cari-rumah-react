import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'
import { PropagateLoader } from 'react-spinners'

import './search.css'
import MapContainer from './../components/map/container'
import ListingContainer from './../components/listing/container'
import { getPlaceGeometry } from './../api/place-geometry'

function Search(props) {
  useEffect(() => {
    let placeId = queryString.parse(props.location.search).placeId
    props.getPlaceGeometry(placeId)
  }, [])

  console.log(props)

  let body = null
  if (props.placeGeometryLoading) {
    body = (<PropagateLoader loading={true} />)
  } else if (props.placeGeometryError) {
    body = (<p>Waduh ada masalah sama websitenya...</p>)
  } else if (props.placeGeometry) {
    body = (
      <>
        <MapContainer
          lat={props.placeGeometry.location.lat}
          long={props.placeGeometry.location.lng}
          zoom={13} />
        <ListingContainer
          lat={props.placeGeometry.location.lat}
          long={props.placeGeometry.location.lng}
          distance={5} />
      </>
    )
  }

  return (
    <div className='searchPage'>
      { body }
    </div>
  )
}

const mapStateToProps = state => ({
  placeGeometryLoading: state.placeGeometry.getIn(['placeGeometry', 'loading']),
  placeGeometry: state.placeGeometry.getIn(['placeGeometry', 'result']),
  placeGeometryError: state.placeGeometry.getIn(['placeGeometry', 'error']),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlaceGeometry: getPlaceGeometry
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
