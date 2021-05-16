import React from 'react'
import {yogaVideos} from "../../Data/YogaData"
import VideoListCOmponent from '../../UtilityFunctions/VideoListCOmponent'
function YogaProductLists() {
    return (
        <>
        <VideoListCOmponent videoData={yogaVideos} title={"Yoga"} />
      </>
    )
}

export default YogaProductLists
