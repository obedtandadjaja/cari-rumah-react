export const GET_AUTOCOMPLETE_PREDICTIONS_BEGIN   = 'GET_AUTOCOMPLETE_PREDICTIONS_BEGIN'
export const GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS = 'GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS'
export const GET_AUTOCOMPLETE_PREDICTIONS_FAILURE = 'GET_AUTOCOMPLETE_PREDICTIONS_FAILURE'

export const getAutocompletePredictionsBegin = () => ({
  type: GET_AUTOCOMPLETE_PREDICTIONS_BEGIN
})

export const getAutocompletePredictionsSuccess = predictions => ({
  type: GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS,
  payload: { predictions }
})

export const getAutoCompletePredictionsFailure = error => ({
  type: GET_AUTOCOMPLETE_PREDICTIONS_FAILURE,
  payload: { error }
})
