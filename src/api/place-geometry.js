import axios from 'axios'
import {
  getPlaceGeometryBegin,
  getPlaceGeometrySuccess,
  getPlaceGeometryFailure
} from './../actions/placeGeometryActions'

export function getPlaceGeometry(place_id) {
  let jwt = window.localStorage.getItem('jwt') || ''

  return dispatch => {
    dispatch(getPlaceGeometryBegin())

    const request = axios.get('http://localhost:4000/google/placeGeometry', {
      params: {
        placeId: place_id
      },
      headers: {
        authorization: `Bearer ${jwt}`
      }
    })

    return request.then(
      res => dispatch(getPlaceGeometrySuccess(res.data)),
      err => dispatch(getPlaceGeometryFailure(err))
    )
  }
}
