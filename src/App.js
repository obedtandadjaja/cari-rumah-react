import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import HeaderContainer from './components/header/container'
import Autocomplete from './components/autocomplete'

let links = [{displayName: 'Option 1'}]

class App extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <HeaderContainer links={links} />
        <Autocomplete />
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
