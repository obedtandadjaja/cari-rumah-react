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
    axios.get('http://localhost:4000/google/placeGeometry', {
      params: {
        placeId: place_id
      },
      headers: {
        authorization: `Bearer ${jwt}`
      }
    }).then(res => {
        dispatch(getPlaceGeometrySuccess(res.data))
        return res.data
      })
      .catch(err => {
        dispatch(getPlaceGeometryFailure(err))
      })
  }
}
