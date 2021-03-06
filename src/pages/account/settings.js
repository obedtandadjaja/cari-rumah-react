import React from 'react'
import { useQuery } from 'react-apollo'
import { BarLoader } from 'react-spinners'

import './settings.css'
import { USER_ACCOUNT_SETTINGS } from './../../graphqlQuery'
import handleError from './../../helpers/errorHandler'

function AccountSettings(props) {
  const { loading, error, data } = useQuery(
    USER_ACCOUNT_SETTINGS,
    {
      variables: {
        id: "asb"
      }
    }
  )

  let notificationMethods = []
  if (error) {
    handleError(error)
  } else if (data) {
    if (data.user.email) notificationMethods.push('Email')
    if (data.user.phone) notificationMethods.push('SMS')
  }

  return (
    <div className='accountSettingsPage'>
      <div className='cardSection'>
        <h2>Biodata</h2>
        <table className='formTable'>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>
                { loading && <BarLoader /> }
                { data && data.user.name }
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                { loading && <BarLoader /> }
                { data && data.user.email }
              </td>
            </tr>
            <tr>
              <td>Nomor Ponsel</td>
              <td>
                { loading && <BarLoader /> }
                { data && data.user.phone }
              </td>
            </tr>
            <tr>
              <td>Cara Notifikasi</td>
              <td>
                { loading && <BarLoader /> }
                { data && notificationMethods.join(' dan ') }
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='cardSection'>
        <h2>Keamanan Akun</h2>
        <table className='formTable'>
          <tbody>
            <tr>
              <td>Kata sandi</td>
              <td>Ubah kata sandi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountSettings
