import { Map } from 'immutable'
import {
  LISTING_FILTER_PRICE_CHANGE,
  LISTING_FILTER_BEDROOM_CHANGE,
  LISTING_FILTER_BATHROOM_CHANGE,
  LISTING_FILTER_TYPE_CHANGE,
  LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE,
} from './../actions/listingFilterAction'

const initialState = Map({
  price: {}
})

export default function listingFilterReducer(state=initialState, action) {
  switch (action.type) {
    case LISTING_FILTER_PRICE_CHANGE:
      return state.merge({
        price: action.payload
      })
    case LISTING_FILTER_BEDROOM_CHANGE:
      return state.merge({
        bedroomMin: action.payload
      })
    case LISTING_FILTER_BATHROOM_CHANGE:
      return state.merge({
        bathroomMin: action.payload
      })
    case LISTING_FILTER_TYPE_CHANGE:
      return state.merge({
        type: action.payload
      })
    case LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE:
      return state.merge({
        residentialType: action.payload
      })
    default:
      return state
  }
}
