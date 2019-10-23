import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Profile from './account/profile'

function AccountPages(props) {
  return (
    <div className='accountPage'>
      <BrowserRouter>
        <Route path='/profile' component={Profile} />
      </BrowserRouter>
    </div>
  )
}

export default AccountPages
