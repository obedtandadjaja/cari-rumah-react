export const GET_AUTOCOMPLETE_PREDICTIONS_BEGIN   = 'GET_AUTOCOMPLETE_PREDICTIONS_BEGIN'
export const GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS = 'GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS'
export const GET_AUTOCOMPLETE_PREDICTIONS_FAILURE = 'GET_AUTOCOMPLETE_PREDICTIONS_FAILURE'

export const fetchAutocompletePredictionsBegin = () => ({
  type: GET_AUTOCOMPLETE_PREDICTIONS_BEGIN
})

export const fetchAutocompletePredictionsSuccess = autocomplete => ({
  type: GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS,
  payload: { autocomplete }
})

export const fetchAUtoCompletePredictionsFailure = error => ({
  type: GET_AUTOCOMPLETE_PREDICTIONS_FAILURE,
  payload: { error }
})
