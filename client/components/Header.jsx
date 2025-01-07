'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/logo.png'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-[#F5F5F5]">
        <div className='flex justify-center items-center h-full w-full px-4 2xl:px-16'>
            <div className='transition duration-500 ease-in-out transform hover:scale-110'>
              <Link href='javascript: location.reload()'><Image src={Logo} alt="logo" height='100'/></Link>
              </div>
        </div>
    </nav>
  )
}

export default Navbar