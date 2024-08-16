import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text, children, type="button", onClick, className='lg:py-2 bg-secondary lg:rounded-md rounded-md  w-full text-white lg:px-4 px-2 py-1 h-fit text-[0.45rem] lg:text-base'}) => {

const navigate = useNavigate()

  return (
    <button type={type} onClick={onClick} className={className}>{text||children}</button>
  )
}

export default Button