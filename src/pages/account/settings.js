import React from 'react'

import './settings.css'

function AccountSettings(props) {
  return (
    <div className='accountSettingsPage'>
      <div className='cardSection'>
        <h2>Biodata</h2>
        <table className='formTable'>
          <tr>
            <td>Nama</td>
            <td>Obed Tandadjaja</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>obed.tandadjaja@gmail.com</td>
          </tr>
          <tr>
            <td>Nomor Ponsel</td>
            <td>Tambah nomor ponsel</td>
          </tr>
          <tr>
            <td>Cara Notifikasi</td>
            <td>Email</td>
          </tr>
        </table>
      </div>

      <div className='cardSection'>
        <h2>Keamanan Akun</h2>
        <table className='formTable'>
          <tr>
            <td>Kata sandi</td>
            <td>Ubah kata sandi</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default AccountSettings
