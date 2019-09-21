import axios from 'axios'
import {
  getAutocompletePredictionsBegin,
  getAutocompletePredictionsSuccess,
  getAutocompletePredictionsFailure
} from './../actions/autocompleteActions';

export function getAutocompletePredictions(input) {
  let jwt = window.localStorage.getItem('jwt') || ''

  return dispatch => {
    dispatch(getAutocompletePredictionsBegin())
    axios.get('http://localhost:4000/google/autocomplete', {
      params: {
        input: input
      },
      headers: {
        authorization: `Bearer ${jwt}`
      }
    }).then(res => {
        dispatch(getAutocompletePredictionsSuccess(res.data))
        return res.data
      })
      .catch(err => {
        dispatch(getAutocompletePredictionsFailure(err))
      })
  }
}
