import { Map } from 'immutable'
import {
  GET_PLACE_GEOMETRY_BEGIN,
  GET_PLACE_GEOMETRY_SUCCESS,
  GET_PLACE_GEOMETRY_FAILURE
} from './../actions/placeGeometryActions'

const initialState = Map({
  placeGeometry: Map({
    result: null,
    loading: false,
    error: null
  })
})

export default function placeGeometryReducer(state=initialState, action) {
  switch (action.type) {
    case GET_PLACE_GEOMETRY_BEGIN:
      return state.merge({
        placeGeometry: {
          loading: true
        }
      })

    case GET_PLACE_GEOMETRY_SUCCESS:
      return state.merge({
        placeGeometry: {
          loading: false,
          result: action.payload.placeGeometry
        }
      })

    case GET_PLACE_GEOMETRY_FAILURE:
      return state.merge({
        placeGeometry: {
          loading: false,
          error: action.payload.error
        }
      })

    default:
      return state
  }
}
