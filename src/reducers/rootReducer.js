import { combineReducers } from 'redux'
import autocomplete from './autocompleteReducer'
import placeGeometry from './placeGeometryReducer'
import mapChange from './mapChangeReducer'
import listingFilter from './listingFilterReducer'

export default combineReducers({
  autocomplete,
  placeGeometry,
  mapChange,
  listingFilter
})
