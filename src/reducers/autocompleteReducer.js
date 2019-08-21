import {
  GET_AUTOCOMPLETE_PREDICTIONS_BEGIN,
  GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS,
  GET_AUTOCOMPLETE_PREDICTIONS_FAILURE
} from './../actions/autocompleteActions';

const initialState = {
  predictions: [],
  loading: false,
  error: null
};

export default function autocompletePredictionsReducer(state=initialState, action) {
  switch(action.type) {
    case GET_AUTOCOMPLETE_PREDICTIONS_BEGIN:
      return state.merge({
        autocompletePredictions: {
          loading: true
        }
      })

    case GET_AUTOCOMPLETE_PREDICTIONS_SUCCESS:
      return state.merge({
        autocompletePredictions: {
          loading: false,
          predictions: action.payload.autocomplete
        }
      })

    case GET_AUTOCOMPLETE_PREDICTIONS_FAILURE:
      return state.merge({
        autocompletePredictions: {
          loading: false,
          error: action.payload.error,
          predictions: []
        }
      })

    default:
      return state
  }
}
