import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './autocomplete.css'
import { getAutocompletePredictions } from './../../api/autocomplete'
import PredictionsContainer from './predictions/container'
import OutsideClickNotifier from './../../highOrderComponents/outsideClickNotifier'

function Autocomplete(props) {
  const defaultState = {
    text: '',
    typing: false,
    typingTimeout: 0,
    visible: false
  }

  const refComponent = useRef()
  const [typingState, setTypingState] = useState(defaultState)
  OutsideClickNotifier(
    (event) => setTypingState(defaultState),
    refComponent
  )

  const onChange = (event) => {
    if (typingState.typingTimeout) {
      clearTimeout(typingState.typingTimeout)
    }

    setTypingState({
      text: event.target.value,
      typing: false,
      typingTimeout: setTimeout(() => {
        if (typingState.text !== '') {
          props.getAutocompletePredictions(typingState.text)
        }
      }, 400),
      visible: event.target.value
    })
  }

  const onFocus = (event) => {
    setTypingState({ ...typingState, visible: true })
  }

  return (
    <div ref={refComponent}>
      <input
        className={props.mini ? 'autocomplete mini' : 'autocomplete'} type='text' placeholder='Cari alamat, daerah, kota, atau kode ZIP'
        onChange={onChange}
        onFocus={onFocus}
      />
      <br />
      {
        !props.autocompletePredictionsLoading &&
        !props.autocompletePredictionsError &&
        typingState.visible &&
        <PredictionsContainer predictions={props.autocompletePredictions} mini={props.mini} />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  autocompletePredictionsLoading: state.autocomplete.getIn(['autocompletePredictions', 'loading']),
  autocompletePredictions: state.autocomplete.getIn(['autocompletePredictions', 'result']),
  autocompletePredictionsError: state.autocomplete.getIn(['autocompletePredictions', 'error'])
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getAutocompletePredictions: getAutocompletePredictions
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete)
