import React, { useState } from 'react'

export const useAuth = () => {
    const [auth, setAuth] = useState(false)
    const token = localStorage.getItem('token')
    if(token) {
        setAuth(true)
    }
    return auth
}
