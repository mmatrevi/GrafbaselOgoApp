import Image from 'next/image'
import logo from "../../public/logo.png"
import React from 'react'

const Main = () => {
  return (
    <figure className='flex md:flex-col bg-slate-100 rounded-xl p-2 hover:bg-slate-200 cursor-pointer'>
      <Image src={logo} alt="" className='w-24 h-24 rounded-full mx-auto' />
      <div className='pt-6 text-center space-y-4'>
        <blockquote>
          <p className='text-lg font-medium'>Welcome to the world of to the world of to the world of</p>
        </blockquote>
        <figcaption className='font-medium'>
          <div className='text-sky-500'>hhggghj jgkjh</div>
          <div className='text-slate-700 dark:text-slate-500'>nggfj jhvj, jhvjh</div>
        </figcaption>
      </div>
    </figure>
  )
}

export default Main