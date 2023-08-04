import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="wrapper flex justify-between">
        <Link className='flex items-center' href="/"><span className='text-xl'>Cuszy Auth</span></Link>
        <button className='button'>Login</button>
    </header>
  )
}

export default Navbar