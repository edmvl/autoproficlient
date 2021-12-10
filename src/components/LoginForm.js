import React, {useState} from 'react'
import {useEffect} from 'react';
import APIS from '../service/apiService';

export const LoginForm = ({setToken, setUserRole, setUserId, setStudentId, setInstructorId}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
    }, [setToken, setUserRole, setUserId])
    const onLogin = (e) => {
        e.preventDefault();
        APIS.login(login, password).then(({token, userId, userRole, studentId, instructorId}) => {
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('userRole', userRole);
            localStorage.setItem('studentId', studentId);
            localStorage.setItem('instructorId', instructorId);
            setStudentId(studentId);
            setUserId(userId);
            setUserRole(userRole);
            setInstructorId(instructorId);
            setToken(token);
        });

    }
    return (
        <div>
            <form>
                <label htmlFor="login"> Логин:
                    <input type="text" name="login" id="login" onChange={e => setLogin(e.target.value)}/>
                </label>
                <label htmlFor="password"> Пароль:
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <button onClick={onLogin}>Войти</button>
            </form>
        </div>
    )
}
