export const LISTING_FILTER_PRICE_CHANGE = 'LISTING_FILTER_PRICE_CHANGE'
export const LISTING_FILTER_BEDROOMS_CHANGE = 'LISTING_FILTER_BEDROOMS_CHANGE'
export const LISTING_FILTER_BATHROOMS_CHANGE = 'LISTING_FILTER_BATHROOMS_CHANGE'
export const LISTING_FILTER_TYPE_CHANGE = 'LISTING_FILTER_TYPE_CHANGE'
export const LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE = 'LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE'
export const LISTING_FILTER_YEAR_BUILT_CHANGE = 'LISTING_FILTER_YEAR_BUILT_CHANGE'
export const LISTING_FILTER_GENERIC_CHANGE = 'LISTING_FILTER_GENERIC_CHANGE'

export const changePriceListingFilter = (priceMin, priceMax) => ({
  type: LISTING_FILTER_PRICE_CHANGE,
  payload: { min: priceMin, max: priceMax }
})

export const changeBedroomsListingFilter = (bedroomsMin, bedroomsMax) => ({
  type: LISTING_FILTER_BEDROOMS_CHANGE,
  payload: { min: bedroomsMin, max: bedroomsMax }
})

export const changeBathroomsListingFilter = (bathroomsMin, bathroomsMax) => ({
  type: LISTING_FILTER_BATHROOMS_CHANGE,
  payload: { min: bathroomsMin, max: bathroomsMax }
})

export const changeTypeListingFilter = (type) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { type }
})

export const changeResidentialTypeListingFilter = (residentialType) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { residentialType }
})

export const changeYearBuiltListingFilter = (yearBuiltMin, yearBuiltMax) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { min: yearBuiltMin, max: yearBuiltMax }
})

export const changeListingFilter = (filterState) => ({
  type: LISTING_FILTER_GENERIC_CHANGE,
  payload: filterState
})
