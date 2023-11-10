import Link from 'next/link'
import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import Main from './components/Card'

const page = () => {
    return (
        <div className='flex-col'>
            <div className='flex bg-slate-200 p-2'>
                <blockquote className='w-full'>Share your story with the world...</blockquote>
            </div>
            <div className='flex'>
                <div className='lg:hidden'>
                    <LeftSideBar />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2 justify-center'>
                    <Main />
                    <Main />
                    <Main />
                    <Main />
                    <Main />
                    <Main />
                    <Main />
                    <Main />
                </div>
            </div>

        </div>

    )
}

export default page