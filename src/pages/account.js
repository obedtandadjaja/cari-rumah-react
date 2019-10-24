import React from 'react'
import { Route } from 'react-router-dom'

import './account.css'
import AccountSettings from './account/settings'
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
      text: 'Pengaturan',
      destination: '/account/settings',
      selected: subheaderItemSelected('/account/settings'),
    },
  ]

  function subheaderItemSelected(destination) {
    return destination === props.location.pathname
  }

  return (
    <div className='accountPage'>
      <Subheader items={subheaderItems} />
      <Route path={`${props.match.path}/saved-listings`} component={AccountSettings} />
      <Route path={`${props.match.path}/saved-searches`} component={AccountSettings} />
      <Route path={`${props.match.path}/settings`} component={AccountSettings} />
    </div>
  )
}

export default AccountPages
