import React from 'react'
import { LoginWithSignup, Opening, Footer } from '../components'


const OpeningPage = () => {
  return (
     <main className="flex flex-col justify-between gap-4 md:flex-row flex-nowrap md:justify-center items-center min-h-screen bg-opening bg-cover"> 
      <Opening/>
      <LoginWithSignup/>
      <Footer />
    </main>
  )
}

export default OpeningPage