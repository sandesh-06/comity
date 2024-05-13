import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const LoginWithSignup = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className={`w-full md:w-1/2 flex flex-col justify-center bg-slate-800 max-w-fit rounded-l-lg rounded-r-md`}>
        {showLogin ? (<Login setShowLogin={setShowLogin}/>):(<SignUp setShowLogin={setShowLogin}/>)}
    </div>
  )
}

export default LoginWithSignup