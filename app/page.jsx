import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Welcome</h1>
      <hr />
      <p className='mb-5'>
        This is demo site for authentication , Next.js && Clerk. <br />
        Go ahead and sign up or sign in!
      </p>
    </>
  )
}
