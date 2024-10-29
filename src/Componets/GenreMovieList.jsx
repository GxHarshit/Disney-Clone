import React from 'react'
import GeneresLIst from '../Constant/GeneresLIst'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
        {GeneresLIst.genere.map((item,index)=> index<=4 && (
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] font-bold'>{item.name}</h2>
                <MovieList genreId={item.id}/>
            </div>
        
    ))}
    </div>
  )
}

export default GenreMovieList