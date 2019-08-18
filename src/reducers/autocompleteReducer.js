import {
  GET_AUTOCOMPLETE_RECOMMENDATIONS_BEGIN,
  GET_AUTOCOMPLETE_RECOMMENDATIONS_SUCCESS,
  GET_AUTOCOMPLETE_RECOMMENDATIONS_FAILURE
} from './../actions/autocompleteActions';

const initialState = {
  recommendations: [],
  loading: false,
  error: null
};

export default function autocompleteRecommendationsReducer(state=initialState, action) {
  switch(action.type) {
    case GET_AUTOCOMPLETE_RECOMMENDATIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case GET_AUTOCOMPLETE_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        recommendations: action.payload.autocomplete
      }

    case GET_AUTOCOMPLETE_RECOMMENDATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        recommendations: []
      }

    default:
      return state
  }
}
