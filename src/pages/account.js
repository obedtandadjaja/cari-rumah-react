import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Profile from './account/profile'
import Subheader from './../components/header/subheader'

function AccountPages(props) {
  const subheaderItems = [
    {
      text: 'Listing Favorit',
      destination: '/account/saved-listings',
      selected: subheaderItemSelected('/account/saved-listings'),
    },
    {
      text: 'Pencarian Simpanan',
      destination: '/account/saved-searches',
      selected: subheaderItemSelected('/account/saved-searches'),
    },
    {
      text: 'Profil',
      destination: '/account/profile',
      selected: subheaderItemSelected('/account/profile'),
    },
  ]

  function subheaderItemSelected(destination) {
    return destination === props.location.pathname
  }

  return (
    <div className='accountPage'>
      <Subheader items={subheaderItems} />
      <BrowserRouter>
        <Route path='/saved-listings' component={Profile} />
        <Route path='/saved-searches' component={Profile} />
        <Route path='/profile' component={Profile} />
      </BrowserRouter>
    </div>
  )
}

export default AccountPages
