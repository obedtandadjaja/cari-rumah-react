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
      .then(res => {
        console.log(res.data)
        dispatch(getAutocompletePredictionsSuccess(res.data))
        return res.data
      })
      .catch(err => {
        dispatch(getAutocompletePredictionsFailure(err))
      })
  }
}
