
import React from 'react'
import { GrLinkNext } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer className='wrapper flex justify-between h-[100px]'>
            <span className='flex items-center justify-center'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <span className='button group flex items-center'>
                <a href="https://github.com/thefordz/" target='_blank' rel="noopener noreferrer" className='flex flex-row gap-2 items-center'>
                    Source Code <GrLinkNext color='white' className=' group-hover:-rotate-45 w-5 h-5 ease duration-200  bg-light rounded-full p-1'/>
                </a>
            </span>
        </footer>
    )
}

export default Footer