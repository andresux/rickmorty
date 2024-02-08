import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'
import Pagination from './components/Pagination'

function App() {

  const [finder, setFinder] = useState(Math.floor(Math.random() * 126 + 1))
  const [location, getLocation, isLoading, hasError] = useFetch()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${finder}`
    getLocation(url)
  }, [finder])
  
  const textInput = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    setFinder(textInput.current.value.trim())
  }

  const quantity = 6
  const second = currentPage * quantity
  const first = second - quantity

  const residentsPart = location && location.residents.slice(first, second)
  const totalPages = location && Math.floor (location.residents.length / quantity) + 1

  return (
    <div className='app'>
      {
        isLoading ?
          <img  className='loading' src="../assets/loading.gif" alt="Loading" />
          :
          <>
            <img src="../assets/banner.png" alt="" />
            <form 
              className='appForm'
              onSubmit={handleSubmit}
            >
              <input 
                className='appText'
                type="number" 
                ref={textInput} 
                placeholder='type a number (1 to 126)'
                required
              />
              <button className='appBtn'>Search</button>
            </form>
            {
              hasError || finder==='0' ?
              <h2>This location does not exist</h2>
              :
            <>
            <LocationCard 
              location = {location}
            />
            <div className='appContainer'>
            {
              residentsPart.map(resident => (
              <ResidentCard 
                  key = {resident}
                  url = {resident}
              />
              ))
            }
            </div>
            <Pagination 
              currentPage= {currentPage}
              setCurrentPage = {setCurrentPage}
              totalPages = {totalPages}
            />
            </>
            }
          </>
      }
    </div>
  )
}

export default App
