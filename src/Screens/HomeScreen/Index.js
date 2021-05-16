import React from 'react'
import Footer from '../../Components/FooterComponent/Footer'
import "./HomeScreenApp.css"
import HomeScreenCatalogue from './HomeScreenCatalogue'
import HomeScreenComponents from './HomeScreenComponents'

function Index() {
    return (
        <>
        <HomeScreenComponents />
            <HomeScreenCatalogue />
            <Footer/>
        
        </>
    )
}

export default Index
