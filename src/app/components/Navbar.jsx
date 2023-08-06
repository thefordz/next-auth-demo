'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/navigation"
import React from 'react'

const Navbar = () => {
    const router = useRouter();
    const { data: session } = useSession()
    console.log(session)
    return (
        <header className="wrapper flex justify-between h-[100px]">
            <Link className='flex items-center' href="/"><span className='text-xl'>Cuszy Auth</span></Link>
            {session?.user ?
                <div className="flex flex-row items-center gap-2">
                    <Image src={session?.user?.image} alt="user-image" width={50} height={50} className='rounded-full cursor-pointer hover:scale-105 ease-in-out duration-300'  onClick={() => router.push('/'+session.user.email)} />
                    <button onClick={() => {signOut() ; router.push('/');}}  className='button'>Logout</button>
                </div>
                :
                <button onClick={() => signIn()} className='button flex items-center'>Login</button>}
        </header>
    )
}

export default Navbar