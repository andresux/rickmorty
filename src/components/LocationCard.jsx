import React from 'react'
import './styles/locationCard.css'

const LocationCard = ({location}) => {
  return (
    <section className='locationSection'>
        <h2 className='locationTitle'>{location?.name}</h2>
        <ul className='locationList'>
            <li className='locationItem'><span>Type: </span>{location?.type}</li>
            <li className='locationItem'><span>Dimension: </span>{location?.dimension}</li>
            <li className='locationItem'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationCard