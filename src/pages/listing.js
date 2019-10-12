import React from 'react'
import queryString from 'query-string'

import ListingDetail from './../components/listing/detail'

function ListingPage(props) {
  const listingId = parseInt(queryString.parse(props.location.search).id)

  return (
    <ListingDetail id={listingId} />
  )
}

export default ListingPage
