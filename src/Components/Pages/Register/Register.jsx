import React, { useEffect, useState } from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { Button } from '../../Ui/Button/Button'
import { Input } from '../../Ui/Input/Input'
import axios from 'axios'
import './Register.css'
const URL = process.env.API

export const Register = () => {

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const Register = async (e) => {
        e.preventDefault()
        axios.post('https://backend-edw.herokuapp.com/usuario',{
            username: username,
            password:password,
            name:name
        })
        .then(res => console.log(res))
    }

    return (
        <>
            <Header />
            <main className='main_contact'>
                <div className='center_main_contact'>

                    <div className='center_form_contact'>
                        <h1 className='subtitle'>Register</h1>
                        <form className='form_contact' onSubmit={Register}>
                            <Input style='txt_default' setState={setUsername} placeholder='Username' />
                            <Input style='txt_default' setState={setPassword} placeholder='password' />
                            <Input style='txt_default' setState={setName} placeholder='name' />
                            <Button style='btn_default' value='Send' />
                        </form>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}
