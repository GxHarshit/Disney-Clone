import React, { useState,useEffect,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiOutlineChevronLeft ,HiOutlineChevronRight } from "react-icons/hi";

function MovieList({genreId}) {
    const [movieList,setMovieList]=useState([]);
    const [loading,setLoading]=useState(false);
    const elementRef = useRef();
    const SliderRight = (element) =>{
        element.scrollLeft+= 630
    }
    const SliderLeft = (element) =>{
        element.scrollLeft-= 630
    }
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
  return (
    <div className='relative'>
        <HiOutlineChevronLeft className='text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block z-10'
       onClick={()=> SliderLeft(elementRef.current)}/> 
       <HiOutlineChevronRight className='text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer hidden md:block z-10 ' onClick={()=> SliderRight(elementRef.current)}/>
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide  scroll-smooth
    pt-5 px-3 p-5 z-1
    '>
        { movieList.map((item) => (
            
            <MovieCard movie={item} />
            
        ))
        }
    </div>
    </div>
  )
}

export default MovieList