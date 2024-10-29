import React from 'react'
import './ProductionHouse.css'
import Pixer from './../assets/Images/pixar.png';
import StarWar from './../assets/Images/starwar.png'
import Marvel from './../assets/Images/marvel.png'
import NationalG from './../assets/Images/nationalG.png'
import Disney from  './../assets/Images/disney.png'

import DisneyV from './../assets/Videos/disney.mp4'
import NationalGV from './../assets/Videos/national-geographic.mp4'
import MarvelV from './../assets/Videos/marvel.mp4'
import StarWarV from './../assets/Videos/star-wars.mp4'
import PixerV from './../assets/Videos/pixar.mp4';


function PrductionHouse() {
    const ProductionHouseList = [
        {
            id: 1,
            
            image: Disney,
            video: DisneyV
        },
        {
            id: 2,
            image: StarWar,
            video: StarWarV
        },
        {
            id: 3,
            image: Marvel,
            video: MarvelV
        },
        {
            id:4,
            image: NationalG,
            video: NationalGV
        },
        {
            id:5,
            image: Pixer,
            video: PixerV
        }
        
    ]
  return (
   <div className='flex gap-2 md:gap-5 px-5 md:px-16 p-1 md:p-4'>
    {ProductionHouseList.map((item)=>(
        <div key={item.id} className='border-[2px] border-gray-600 rounded-lg 
        hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:border-white
        videoDiv relative shadow-xl shadow-black'>
            <video src={item.video} autoPlay loop playsInline muted
            className='absolute top-[0] rounded-lg z-[-10] opacity-0  vdo'  />
            <img src={item.image} alt="production house" className='w-full' />
            
        </div>
    ))}
   </div>
  

  )
}

export default PrductionHouse