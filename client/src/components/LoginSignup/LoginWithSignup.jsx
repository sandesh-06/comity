import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const LoginWithSignup = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className={`w-full md:w-1/2 bg-slate-800 max-w-fit rounded-l-lg rounded-r-md m-10`}>
        {showLogin ? (<Login setShowLogin={setShowLogin}/>):(<SignUp setShowLogin={setShowLogin}/>)}
    </div>
  )
}

export default LoginWithSignup