'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/logo.png'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
} 
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-[#F5F5F5]">
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            <div><Link href='/'><Image src={Logo} alt="logo" height='80'/></Link></div>
            <div className='hidden sm:flex'>
                <ul className='hidden sm:flex'>
                    <Link href='/'>
                    <li className='ml-5 uppercase hover:border-b text-lg'>Home</li>
                    </Link> 
                    <Link href='/Finder'>
                    <li className='ml-5 uppercase hover:border-b text-lg '>Find</li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
               <AiOutlineMenu size={30}/> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar