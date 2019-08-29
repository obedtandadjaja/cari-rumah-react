import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import Header from './components/header/header'
import Autocomplete from './components/autocomplete/autocomplete'

class App extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <Autocomplete className='autocompleteContainer' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
