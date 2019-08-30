import React from 'react'

import './list.css'
import LinkItem from './item'

class List extends React.Component {
  render() {
    return (
      <ul className='headerLinksList'>
        {
          this.props.links.map((link, i) => (
            <li className='headerLinksListLi' key={i}>
              <LinkItem link={link} />
            </li>
          ))
        }
      </ul>
    )
  }
}

export default List
