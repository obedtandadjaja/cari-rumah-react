import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import Header from './components/header/header'
import BackgroundImage from './components/backgroundImage'
import Autocomplete from './components/autocomplete/autocomplete'

class App extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='AppBody'>
          <BackgroundImage backgroundImage={'http://c1.peakpx.com/wallpaper/551/3/749/architecture-family-house-front-yard-wallpaper-preview.jpg'} />
          <div className='bodyContent'>
            <h1>Cari rumah dibuat gampang</h1>
            <Autocomplete className='autocompleteContainer' />
          </div>
        </div>
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
