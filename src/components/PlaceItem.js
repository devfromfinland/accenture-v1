import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlaceItem = ({ place }) => {
  // TODO: Get status based on current time and place's open time
  const status = 'Currently Open'

  return (
    <Wrapper>
      <div>{place.name}</div>
      <div>{place.address}</div>
      <div>{status}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired,
}

export default PlaceItem
