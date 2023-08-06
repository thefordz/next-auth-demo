'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import Provider from '../components/Provider'
import Link from 'next/link'
import { Router, useRouter } from 'next/navigation'

const Profile = ({ params }) => {
  const router = useRouter();
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <div className='container flex items-center justify-center flex-col gap-5'>
        <img src={session.user.image} alt="user-image" className='rounded-full' />
        <div className="flex items-center flex-col text-light bg-dark px-4 py-2 rounded-xl">
          <p className=''>{session.user.name}</p>
          <p className=''>{session.user.email}</p>
        </div>
      </div>
    )
  }

  return (router.push('/'))

}

export default Profile