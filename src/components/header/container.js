import React from 'react'

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='headerContainer'>
        <ul>
          {this.props.links.map(link => (
              <li>{link.displayName}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default HeaderContainer
