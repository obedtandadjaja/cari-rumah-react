export const LISTING_FILTER_PRICE_CHANGE = 'LISTING_FILTER_PRICE_CHANGE'
export const LISTING_FILTER_BEDROOM_CHANGE = 'LISTING_FILTER_BEDROOM_CHANGE'
export const LISTING_FILTER_BATHROOM_CHANGE = 'LISTING_FILTER_BATHROOM_CHANGE'
export const LISTING_FILTER_TYPE_CHANGE = 'LISTING_FILTER_TYPE_CHANGE'
export const LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE = 'LISTING_FILTER_RESIDENTIAL_TYPE_CHANGE'

export const changePriceListingFilter = (priceMin, priceMax) => ({
  type: LISTING_FILTER_PRICE_CHANGE,
  payload: { priceMin, priceMax }
})

export const changeBedroomListingFilter = (bedroomMin) => ({
  type: LISTING_FILTER_BEDROOM_CHANGE,
  payload: { bedroomMin }
})

export const changeBathroomListingFilter = (bathroomMin) => ({
  type: LISTING_FILTER_BATHROOM_CHANGE,
  payload: { bathroomMin }
})

export const changeTypeListingFilter = (type) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { type }
})

export const changeResidentialTypeListingFilter = (residentialType) => ({
  type: LISTING_FILTER_TYPE_CHANGE,
  payload: { residentialType }
})
