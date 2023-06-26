"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Nav = () => {
  return (
    <nav className='flex-between w-full'>
      <div  className='px-5 py-2' >
        <Link href='/' className=''>
          <h1 className='text-5xl mb-4 text-white hover:text-orange-600 outline-black font-serif tracking-wider'>
            Joshua Ling's Portfolio
          </h1>
        </Link>
        <a href='https://github.com/JoshuaLingg' target='_blank' className='bg-white hover:bg-lime-400 max-w-[150px] px-2 rounded-md items-center flex cursor-pointer'>
        <Image
          width={50} 
          height={50}
          className='inline-block' 
          src="/github.png" 
          alt="Github logo" 
        />
          <p className='text-2xl py-2'>
            GitHub
          </p>
        </a>
      </div>

    </nav>
  )
}

export default Nav