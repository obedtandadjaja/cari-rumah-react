export const GET_PLACE_GEOMETRY_BEGIN = 'GET_PLACE_GEOMETRY_BEGIN'
export const GET_PLACE_GEOMETRY_SUCCESS = 'GET_PLACE_GEOMETRY_SUCCESS'
export const GET_PLACE_GEOMETRY_FAILURE = 'GET_PLACE_GEOMETRY_FAILURE'

export const getPlaceGeometryBegin = () => ({
  type: GET_PLACE_GEOMETRY_BEGIN
})

export const getPlaceGeometrySuccess = placeGeometry => ({
  type: GET_PLACE_GEOMETRY_SUCCESS,
  payload: { placeGeometry }
})

export const getPlaceGeometryFailure = error => ({
  type: GET_PLACE_GEOMETRY_FAILURE,
  payload: { error }
})
