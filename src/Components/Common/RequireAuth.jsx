import React, { useContext } from 'react'
import { AuthContext } from '../Backend/Context/Auth'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }) {
    const { user } = useContext(AuthContext)

    if (!user) {
        return <Navigate to='/admin' />;
    }
    return children;
}

export default RequireAuth
