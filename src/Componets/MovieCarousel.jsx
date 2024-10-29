import React from 'react';
import { Skeleton } from '@mui/material';

const MovieCarousel = ({ movies, isLoading }) => {
    return (
        <div className='flex overflow-x-auto w-full px-5 md:px-16 py-4 scrollbar-hide scroll-smooth snap-x' ref={elementRef}>
            {isLoading ? (
                // Show Skeletons while loading
                Array.from(new Array(5)).map((_, index) => (
                    <Skeleton key={index} variant="rectangular" width={210} height={118} className="mr-5 rounded-md" />
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
    );
};

export default MovieCarousel;