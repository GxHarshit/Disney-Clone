import React from 'react'
import logo from './../assets/Images/logo-d-plus.webp'
import { HiOutlineSearch ,HiOutlineVideoCamera,HiOutlineTemplate} from "react-icons/hi";
import { HiMiniComputerDesktop,HiHome } from "react-icons/hi2";
import HeaderItem from './HeaderItem';

function Header() {
  const menu = [
    { id: 1, name: "Home", icon: HiHome },
    { id: 2, name: "Search", icon: HiOutlineSearch },
    { id: 3, name: "Movies", icon: HiOutlineVideoCamera },
    { id: 4, name: "Categories", icon: HiOutlineTemplate },
    { id: 5, name: "TV", icon: HiMiniComputerDesktop },
    ];
  
  return (
    
    <div className='flex items-center gap-8 justify-between m-3 px-4'>
      <div className='flex gap-8'>
    <img src={logo} alt="Logo" className='w-[54px]  object-cover'/>
    {menu.map((item) => <HeaderItem name={item.name} Icon={item.icon} key={item.id}/>)}
    </div>
    <img src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png" alt="" className='w-[40px]' />
    </div>
    
    
  )
}

export default Header