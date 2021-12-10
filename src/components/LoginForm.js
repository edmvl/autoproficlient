import React from 'react'
import { useEffect } from 'react';
import APIS from '../service/apiService';

export const LoginForm = ({ setToken, setUserRole, setUserId }) => {
    useEffect(() => {
        APIS.login("zhendozzz", "zhendozzz").then(({ token, userId, userRole, studentId }) => {
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('userRole', userRole);
            localStorage.setItem('studentId', studentId);
            setToken(token);
            setUserId(userId);
            setUserRole(userRole);
        });
    }, [setToken, setUserRole, setUserId])
    return (
        <div>
        </div>
    )
}
