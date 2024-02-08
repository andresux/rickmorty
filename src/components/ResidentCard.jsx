import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/residentCard.css'

const ResidentCard = ({url}) => {

    const [ resident, getResident ] = useFetch()

    useEffect(() => {
        getResident(url)
    }, [])

  return (
    <article className='residentArticle'>
        <figure className='residentFigure'>
            <img className='residentImg' src={resident?.image} alt="Resident Img" />
            <figcaption className='residentStatus'>
                <div className={`residentCircle ${resident?.status}`}></div>
                <p>{resident?.status}</p>
            </figcaption>
        </figure>
        <h3 className='residentName'>{resident?.name}</h3>
        <hr />
        <ul className='residentList'>
            <li className='residentItem'><span>Specie: </span> <span>{resident?.species}</span></li>
            <li className='residentItem'><span>Origin: </span> <span>{resident?.origin.name}</span></li>
            <li className='residentItem'><span>Eppisodes where appear: </span> <span>{resident?.episode.length}</span></li>
        </ul>
    </article>
  )
}

export default ResidentCard