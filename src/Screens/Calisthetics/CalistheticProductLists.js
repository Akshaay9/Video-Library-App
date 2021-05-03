import React from 'react'
import {calisthenicVideos} from "../../Data/CalisthenicsData"
import VideoListCOmponent from '../../UtilityFunctions/VideoListCOmponent'
function CalistheticProductLists() {
    return (
        <>
        <VideoListCOmponent videoData={calisthenicVideos} title={"Calisthenic training"} />
      </>
    )
}

export default CalistheticProductLists
