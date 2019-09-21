import { combineReducers } from 'redux'
import autocomplete from './autocompleteReducer'
import placeGeometry from './placeGeometryReducer'

export default combineReducers({
  autocomplete,
  placeGeometry
})
