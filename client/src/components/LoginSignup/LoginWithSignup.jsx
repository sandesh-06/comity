import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const LoginWithSignup = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className={`w-full md:w-1/2 flex flex-col justify-center`}>
        {showLogin ? (<Login showLogin={showLogin} setShowLogin={setShowLogin}/>):(<SignUp showLogin={showLogin} setShowLogin={setShowLogin}/>)}
    </div>
  )
}

export default LoginWithSignup