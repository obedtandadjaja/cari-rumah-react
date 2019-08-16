export const FETCH_AUTOCOMPLETE_BEGIN   = 'FETCH_AUTOCOMPLETE_BEGIN'
export const FETCH_AUTOCOMPLETE_SUCCESS = 'FETCH_AUTOCOMPLETE_SUCCESS'
export const FETCH_AUTOCOMPLETE_FAILURE = 'FETCH_AUTOCOMPLETE_FAILURE'

export const fetchAutocompleteBegin = () => ({
  type: FETCH_AUTOCOMPLETE_BEGIN
})

export const fetchAutocompleteSuccess = autocomplete => ({
  type: FETCH_AUTOCOMPLETE_SUCCESS,
  payload: { autocomplete }
})

export const fetchAUtoCompleteFailure = error => ({
  type: FETCH_AUTOCOMPLETE_FAILURE,
  payload: { error }
})
