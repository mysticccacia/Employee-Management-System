import { useState,useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { AuthContext } from './AuthContext';




const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState({ employees: [], admin: {} })

    useEffect(() => {
      const {employees,admin} = getLocalStorage() || {}

      setUserData({employees,admin})
    },[])
    
  return (
    
        <AuthContext.Provider value={{ userData, setUserData }} >
        {children}
        </AuthContext.Provider >
    
  )
}

export default AuthProvider