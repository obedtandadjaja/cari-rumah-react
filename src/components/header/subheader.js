import React from 'react'
import { Link } from 'react-router-dom'

import './subheader.css'

function Subheader(props) {
  let items = []
  props.items.forEach((item, i) => {
    items.push(
      <Link to={{pathname: item.destination}}>
        <div
          key={`subheaderItem${i}`}
          className={ `subheaderItem ${item.selected ? 'selected' : ''}` }
          {...item}>
          { item.text }
        </div>
      </Link>
    )
  })

  return (
    <div className='subheader'>
      { items }
    </div>
  )
}

export default Subheader
