import React from 'react'
const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

function MovieCard({movie}) {
  return (
    <>
    <img src={IMAGE_URL+movie.poster_path} alt="" 
    className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-grey-400
    
     transition-all duration-180 ease-in-out hover:scale-110 cursor-pointer'
    />
    </>
    
  )
}

export default MovieCard