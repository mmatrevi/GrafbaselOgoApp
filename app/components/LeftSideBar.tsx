import Link from 'next/link'
import React from 'react'
import { NavLinks } from './constant'

const LeftSideBar = () => {
    return (
        <div className='flex flex-col p-3'>
            {NavLinks.map((link) => (
                <Link href={link.href} key={link.key} className="cursor-pointer hover:bg-slate-200 rounded-lg p-2">
                    {link.text}
                </Link>
            ))}
        </div>

    )
}

export default LeftSideBar