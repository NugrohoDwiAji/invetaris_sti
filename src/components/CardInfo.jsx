import React from 'react'

const CardInfo = ({textColor, text}) => {
  return (
    <div className={`h-screen w-full left-0 flex justify-center items-center text-[${textColor}] absolute bg-secondary bg-opacity-20 `}>
        <div className='h-28 w-56 p-2 bg-white rounded-xl text-center'>{text}</div>
    </div>
  )
}

export default CardInfo