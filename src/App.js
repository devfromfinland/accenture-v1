import React from 'react'
import PlacesList from './components/PlaceList'

// TODO: add state

function App() {
  return (
    <PlacesList
      places={[{ name: 'Viet', address: 'Mechelininkatu 3A, Helsinki' }]}
    />
  )
}

export default App
