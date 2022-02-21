import React, { useState, useEffect } from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'

import './Home.css'

export const Home = () => {
  
    return (
        <>
            <Header />
            <main className='main_home'>
                <div className="center_main">
                <img className='image_main' src="https://c4.wallpaperflare.com/wallpaper/508/555/786/lofi-cafe-asian-digital-art-artwork-hd-wallpaper-preview.jpg" alt="" />
                </div>
            </main>
            <Footer/>
        </>
    )
}
