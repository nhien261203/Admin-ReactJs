import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import ListCard from './ListCard/ListCard'
import MainContent from './Main/MainContent'
import Footer from './Footer/Footer'

const websitelayout = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ListCard />
            <MainContent />
            <Footer />
        </>
    )
}

export default websitelayout