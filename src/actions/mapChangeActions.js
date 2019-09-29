export const MAP_BOUNDS_CHANGE = 'MAP_BOUNDS_CHANGE'

export const changeMapBounds = (marginBounds) => ({
  type: MAP_BOUNDS_CHANGE,
  payload: { marginBounds }
})
