import { Map } from 'immutable'
import { MAP_BOUNDS_CHANGE } from './../actions/mapChangeActions'

const initialState = Map({
  mapChange: Map({
    mapBounds: {}
  })
})

export default function mapChangeReducer(state=initialState, action) {
  switch (action.type) {
    case MAP_BOUNDS_CHANGE:
      return state.merge({
        mapChange: {
          mapBounds: {
            ne: {
              lat: action.payload.marginBounds.ne.lat,
              long: action.payload.marginBounds.ne.lng,
            },
            se: {
              lat: action.payload.marginBounds.se.lat,
              long: action.payload.marginBounds.se.lng,
            },
            nw: {
              lat: action.payload.marginBounds.nw.lat,
              long: action.payload.marginBounds.nw.lng,
            },
            sw: {
              lat: action.payload.marginBounds.sw.lat,
              long: action.payload.marginBounds.sw.lng,
            }
          }
        }
      })
    default:
      return state
  }
}
