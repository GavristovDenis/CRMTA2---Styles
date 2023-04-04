import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './components/Header'
import { Balls } from './components/Balls'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import Mobile from './components/Mobile'
const Desktop = () => {
    const size = window.screen.width
    return (
        <div>
            <Helmet>
                <title>WELBEX</title>
            </Helmet>
            {size > 768 ?
                <div className="desktop-container">
                    <div className="desktop-desktop">
                        <Balls />
                        <Body />
                        <Header />
                        <Footer />
                    </div>
                </div>
                :

                <Mobile />

            }

        </div>
    )
}

export default Desktop
