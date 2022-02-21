import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { Button } from '../../Ui/Button/Button'
import { Input } from '../../Ui/Input/Input'
import axios from 'axios'
import './Login.css'
const URL = process.env.API

export const Login = () => {

    const navigate = useNavigate()
 
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    const setToken = (token) => {
        localStorage.setItem('token', token)
    }

    const Login = async (e) => {
        e.preventDefault()
        axios.post('https://backend-edw.herokuapp.com/login',{
            username: username,
            password:password
        })
        .then(res => {
            if(res.data?.Message === 'Credenciales Invalidas') {
                setMessage('Datos incorrectos');
            }
            else {
                navigate('/panel')
                setToken(res.data)
            }
        })
    }

    return (
        <>
            <Header />
            <main className='main_contact'>
                <div className='center_main_contact'>

                    <div className='center_form_contact'>
                        <h1 className='subtitle'>Login</h1>
                        <form className='form_contact' onSubmit={Login}>
                            <Input style='txt_default' setState={setUsername} placeholder='Username' />
                            <Input style='txt_default' setState={setPassword} placeholder='password' type='password' />
                            <Button style='btn_default' value='Send' />
                            <p>{message}</p>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}
