import { combineReducers } from 'redux'
import autocomplete from './autocompleteReducer'
import placeGeometry from './placeGeometryReducer'
import mapChange from './mapChangeReducer'

export default combineReducers({
  autocomplete,
  placeGeometry,
  mapChange,
})
