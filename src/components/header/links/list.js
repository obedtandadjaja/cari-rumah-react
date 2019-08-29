import React from 'react'

import LinkItem from './item'

class List extends React.Component {
  render() {
    return (
      <ul className='headerLinksList'>
        {
          this.props.links.map((link, i) => (
            <li className='headerLinksLi' key={i}>
              <LinkItem link={link} />
            </li>
          ))
        }
      </ul>
    )
  }
}

export default List
