import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './autocomplete.css'
import { getAutocompletePredictions } from './../../api/autocomplete'
import PredictionsContainer from './predictions/container'

class Autocomplete extends React.Component {
  state = {
    text: '',
    typing: false,
    typingTimeout: 0
  }

  onChange = (event) => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout)
    }

    this.setState({
      text: event.target.value,
      typing: false,
      typingTimeout: setTimeout(() => {
        if (this.state.text !== '') {
          this.props.getAutocompletePredictions(this.state.text)
        }
      }, 400)
    })
  }

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  render() {
    return (
      <div>
        <input className='autocomplete' type='text' placeholder='Enter an address, neighborhood, city, or ZIP code'
          onChange={this.onChange} />
        <p>{ this.props.autocompletePredictionsLoading ? "I'm loading please wait" : "I'm ready" }</p>
        {
          !this.props.autocompletePredictionsLoading &&
          !this.props.autocompletePredictionsError &&
          <PredictionsContainer predictions={this.props.autocompletePredictions} />
        }
      </div>
    )
  }
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
