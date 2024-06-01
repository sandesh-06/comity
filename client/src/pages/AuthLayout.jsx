import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { SparklesPreview } from '../components/ui/SparklesPreview';
const AuthLayout = ({children, authentication=true}) => {
    const navigate = useNavigate();
    const isUserAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        if(authentication && isUserAuthenticated !== authentication){
            navigate("/welcome")
        } else if(!authentication && isUserAuthenticated !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [isUserAuthenticated, navigate, authentication])

  return loader ? <><SparklesPreview /></> : <>{children}</>
}

export default AuthLayout