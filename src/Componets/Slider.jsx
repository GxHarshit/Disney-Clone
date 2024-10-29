import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiOutlineChevronLeft ,HiOutlineChevronRight } from "react-icons/hi";
import { Skeleton } from '@mui/material';


const IMAGE_URL = 'https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth ;

function Slider() {
    const [movies, setMovies] = useState([]) ;
    const [isLoading, setIsLoading] = useState(true); // Define isLoading state
    const elementRef = useRef();
    useEffect(()=>{
        getTreandingVideos();
    },[]);

    const getTreandingVideos = () =>{
        GlobalApi.getTreandingVIdeos.then(res =>{
            
            setMovies(res.data.results);
            setIsLoading(false)
        })
    }

    const SliderRight = (element) =>{
        element.scrollLeft+= screenWidth-108 
    }
    const SliderLeft = (element) =>{
        element.scrollLeft-= screenWidth-108
    }
  return (
    <div>
       <HiOutlineChevronLeft className='text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block'
       onClick={()=> SliderLeft(elementRef.current)}/> 
       <HiOutlineChevronRight className='text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer hidden md:block ' onClick={()=> SliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-5 md:px-16 py-4 scrollbar-hide  scroll-smooth snap-x' ref={elementRef}  >
    {isLoading ? (
                // Show Skeletons while loading
                Array.from(new Array(5)).map((_, index) => (
                    <Skeleton key={index} variant="rounded"  height={310} animation="wave"  className="mr-5  min-w-full " />
                ))
            ) : (
                // Show movie images once loaded
                movies.map((item) => (
                    <img 
                        key={item.id} 
                        src={IMAGE_URL + item.backdrop_path} 
                        alt={item.title} 
                        className='min-w-full md:h-[310px] object-cover object-left-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in snap-center' 
                    />
                ))
            )}
    </div>
    </div>
  )
}

export default Slider