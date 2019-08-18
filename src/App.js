import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import HeaderContainer from './components/header/container'

import {fetchAutocompleteRecommendations} from './api/autocomplete'

let links = [{displayName: 'Heyy'}]

class App extends React.Component {
  componentWillMount() {
    const { fetchAutocompleteRecommendations } = this.props;
    fetchAutocompleteRecommendations();
  }

  render() {
    const { pending, recommendations, error } = this.props

    return (
      <div className="App">
        <HeaderContainer links={links} />
        <p>this.props</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAutocompleteRecommendations: fetchAutocompleteRecommendations
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
