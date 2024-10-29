import React from 'react'

function HeaderItem({Icon,name}) {
  return (
    <div className='flex items-center gap-3 text-[18px] font-semibold cursor-pointer
    hover:underline
    underline-offset-8'>
        <Icon />
        <span className='hidden md:block'>{name}</span>
    </div>
  )
}

export default HeaderItem