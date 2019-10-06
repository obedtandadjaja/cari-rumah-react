import { Map } from 'immutable'
import {
  LISTING_FILTER_GENERIC_CHANGE,
  LISTING_FILTER_PRICE_CHANGE,
  LISTING_FILTER_BEDROOMS_CHANGE,
  LISTING_FILTER_BATHROOMS_CHANGE,
  LISTING_FILTER_TYPE_CHANGE,
  LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE,
  LISTING_FILTER_YEAR_BUILT_CHANGE,
} from './../actions/listingFilterActions'

const initialState = Map({
  price: {},
  bedrooms: {},
  bathrooms: {},
  yearBuilt: {},
})

export default function listingFilterReducer(state=initialState, action) {
  switch (action.type) {
    case LISTING_FILTER_GENERIC_CHANGE:
      return state.merge(action.payload)
    case LISTING_FILTER_PRICE_CHANGE:
      return state.merge({
        price: action.payload
      })
    case LISTING_FILTER_BEDROOMS_CHANGE:
      return state.merge({
        bedrooms: action.payload
      })
    case LISTING_FILTER_BATHROOMS_CHANGE:
      return state.merge({
        bathrooms: action.payload
      })
    case LISTING_FILTER_TYPE_CHANGE:
      return state.merge({
        type: action.payload
      })
    case LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE:
      return state.merge({
        residentialType: action.payload
      })
    case LISTING_FILTER_YEAR_BUILT_CHANGE:
      return state.merge({
        yearBuilt: action.payload
      })
    default:
      return state
  }
}
