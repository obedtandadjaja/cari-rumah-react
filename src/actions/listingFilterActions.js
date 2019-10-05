export const LISTING_FILTER_PRICE_CHANGE = 'LISTING_FILTER_PRICE_CHANGE'
export const LISTING_FILTER_BEDROOM_CHANGE = 'LISTING_FILTER_BEDROOM_CHANGE'
export const LISTING_FILTER_BATHROOM_CHANGE = 'LISTING_FILTER_BATHROOM_CHANGE'
export const LISTING_FILTER_TYPE_CHANGE = 'LISTING_FILTER_TYPE_CHANGE'
export const LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE = 'LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE'
export const LISTING_FILTER_YEAR_BUILT_CHANGE = 'LISTING_FILTER_YEAR_BUILT_CHANGE'
export const LISTING_FILTER_GENERIC_CHANGE = 'LISTING_FILTER_GENERIC_CHANGE'

export const changePriceListingFilter = (priceMin, priceMax) => ({
  type: LISTING_FILTER_PRICE_CHANGE,
  payload: { priceMin, priceMax }
})

export const changeBedroomListingFilter = (bedroomsMin) => ({
  type: LISTING_FILTER_BEDROOM_CHANGE,
  payload: { bedroomsMin }
})

export const changeBathroomListingFilter = (bathroomsMin) => ({
  type: LISTING_FILTER_BATHROOM_CHANGE,
  payload: { bathroomsMin }
})

export const changeTypeListingFilter = (type) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { type }
})

export const changeResidentialTypeListingFilter = (residentialType) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { residentialType }
})

export const changeYearBuiltListingFilter = (yearBuiltMin) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { yearBuiltMin }
})

export const changeListingFilter = (filterState) => ({
  type: LISTING_FILTER_GENERIC_CHANGE,
  payload: filterState
})
