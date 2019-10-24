import React from 'react'
import { Link } from 'react-router-dom'

import './subheader.css'

function Subheader(props) {
  let items = []
  props.items.forEach((item, i) => {
    items.push(
      <div
        key={`subheaderItem${i}`}
        className={ `subheaderItem ${item.selected ? 'selected' : ''}` }
        {...item}>
        <Link to={{pathname: item.destination}}>
          { item.text }
        </Link>
      </div>
    )
  })

  return (
    <div className='subheader'>
      { items }
    </div>
  )
}

export default Subheader
