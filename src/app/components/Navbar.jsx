'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { data: session } = useSession()
    console.log(session)
    return (
        <header className="wrapper flex justify-between">
            <Link className='flex items-center' href="/"><span className='text-xl'>Cuszy Auth</span></Link>
            {session?.user ?
                <div className="flex flex-row items-center gap-2">
                    <Image src={session?.user?.image} alt="user-image" width={50} height={50} className='rounded-full' />
                    <button onClick={() => signOut()} className='button'>Logout</button>
                </div>
                :
                <button onClick={() => signIn()} className='button'>Login</button>}
        </header>
    )
}

export default Navbar