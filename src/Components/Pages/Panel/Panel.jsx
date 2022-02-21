import React, { useEffect, useState } from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import axios from 'axios'
import './Panel.css'
const URL = process.env.API

export const Panel = () => {

    const [users, setUsers] = useState(null)

    const GetRegisters = async () => {

        axios.get('https://backend-edw.herokuapp.com/usuarios')
            .then(res => res)
            .then(res => setUsers(res.data))
    }

    useEffect(() => {
        GetRegisters()
    }, [])

    return (
        <>
            <Header />
            <main>
                <div className='canter_main_panel'>
                    <table className='users_table'>
                        <thead className='header_users_table'>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody className='body_users_table'>
                            {
                                users?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    )
}
