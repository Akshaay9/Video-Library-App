import React from 'react'
import Footer from '../../Components/FooterComponent/Footer'
import YogaBanner from './YogaBanner'
import YogaProductLists from './YogaProductLists'

function Index() {
    return (
        <div style={{marginTop:"3.2rem"}}>
            <YogaBanner />
            <YogaProductLists />
            <Footer/>
        </div>
    )
}

export default Index
