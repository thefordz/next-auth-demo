import Image from 'next/image'

export default function Home() {
  return (
    <main className='container flex items-center justify-center flex-col gap-6'>

      <div className='flex w-10/12  px-4'>
        <p>
          Hello ,
          This website is DEMO of login page with <span className='text-green-500 cursor-pointer' ><a href="https://next-auth.js.org/">NextAuth.js</a></span> using session provider without database
        </p>
      </div>

      <div className='flex w-10/12 flex-col px-4'>
        <h1 className='text-2xl flex justify-center mb-2 underline'>How to try this</h1>
        <p>Step 1 : Click Login On Top Right</p>
        <p>Step 2 : Click on Profile Icon to go to Your Profile</p>
      </div>
    </main>
  )
}
