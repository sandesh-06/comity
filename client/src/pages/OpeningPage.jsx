import React from 'react'
import { LoginWithSignup, Opening, Footer } from '../components'


const OpeningPage = () => {
  return (
     <section className="flex flex-col justify-between gap-4 md:flex-row flex-nowrap md:justify-center items-center min-h-screen bg-opening bg-cover brightness-75"> 
      <Opening/>
      <LoginWithSignup/>
      <Footer />
    </section>
  )
}

export default OpeningPage