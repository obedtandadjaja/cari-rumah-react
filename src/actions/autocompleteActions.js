export const GET_AUTOCOMPLETE_RECOMMENDATIONS_BEGIN   = 'GET_AUTOCOMPLETE_RECOMMENDATIONS_BEGIN'
export const GET_AUTOCOMPLETE_RECOMMENDATIONS_SUCCESS = 'GET_AUTOCOMPLETE_RECOMMENDATIONS_SUCCESS'
export const GET_AUTOCOMPLETE_RECOMMENDATIONS_FAILURE = 'GET_AUTOCOMPLETE_RECOMMENDATIONS_FAILURE'

export const fetchAutocompleteRecommendationsBegin = () => ({
  type: GET_AUTOCOMPLETE_RECOMMENDATIONS_BEGIN
})

export const fetchAutocompleteRecommendationsSuccess = autocomplete => ({
  type: GET_AUTOCOMPLETE_RECOMMENDATIONS_SUCCESS,
  payload: { autocomplete }
})

export const fetchAUtoCompleteRecommendationsFailure = error => ({
  type: GET_AUTOCOMPLETE_RECOMMENDATIONS_FAILURE,
  payload: { error }
})
