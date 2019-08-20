import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import HeaderContainer from './components/header/container'

import {fetchAutocompletePredictions} from './api/autocomplete'

let links = [{displayName: 'Heyy'}]

class App extends React.Component {
  componentWillMount() {
    const { fetchAutocompletePredictions } = this.props;
    fetchAutocompletePredictions();
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer links={links} />
        <p>{this.props.predictions}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAutocompletePredictions: fetchAutocompletePredictions
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
