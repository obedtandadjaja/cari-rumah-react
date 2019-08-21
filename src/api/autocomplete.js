import axios from 'axios'
import {
  getAutocompletePredictionsBegin,
  getAutocompletePredictionsSuccess,
  getAutocompletePredictionsFailure
} from './../actions/autocompleteActions';

export function getAutocompletePredictions(input) {
  return dispatch => {
    dispatch(getAutocompletePredictionsBegin())
    axios.get(`http://localhost:4000/google/autocomplete?input=${input}`)
      .then(res => res.json())
      .then(res => {
        if(res.error) {
          throw(res.error)
        }
        dispatch(getAutocompletePredictionsSuccess(res.recommendations))
        return res.recommendations
      })
      .catch(error => {
        dispatch(getAutocompletePredictionsFailure(error))
      })
  }
}
