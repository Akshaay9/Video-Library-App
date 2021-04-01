import React from 'react'
import BodyBuildingScreenBanner from './BodyBuildingScreenBanner'
import BodyBuildingScreenProductList from './BodyBuildingScreenProductList'
import "./BodyBuilding.css"

function index() {
    return (
        <>
            <BodyBuildingScreenBanner />
            <BodyBuildingScreenProductList/>
        </>
    )
}

export default index
