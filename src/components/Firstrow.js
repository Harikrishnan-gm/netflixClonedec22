import React, { useState,useEffect } from 'react'
import instance from '../instanceConfig'
import './Firstrow.css'
function Firstrow({isPoster,title,fetchUrl}) {
const [movies,setMovies]=useState([])
const BaseUrl='https://image.tmdb.org/t/p/original'
  const fetchData=async ()=>{
    const response=await instance.get(fetchUrl)
    const {results}=response.data
    setMovies(results)

  }
  // console.log(movies);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='movies_row'>
        {
          movies.map((movie)=>(
            <img className={`movies 
            ${isPoster&& 'poster' }`} src={`${BaseUrl}/${isPoster?movie?.poster_path: movie?.backdrop_path}`} alt="movie image" />
          ))
        }
      </div>
    </div>
  )
}

export default Firstrow