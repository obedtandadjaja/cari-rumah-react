import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import HeaderContainer from './components/header/container'

import { getAutocompletePredictions } from './api/autocomplete'

let links = [{displayName: 'Option 1'}]

class App extends React.Component {
  componentWillMount() {
    const { getAutocompletePredictions } = this.props;
    getAutocompletePredictions('Jakarta');
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer links={links} />
        {
          this.props.autocompletePredictionsLoading ?
          <p>I'm loading</p> :
          {this.props.autocompletePredictions}
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
)(App)
