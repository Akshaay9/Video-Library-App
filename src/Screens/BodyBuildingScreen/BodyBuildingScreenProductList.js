import React, { useState } from "react";
import YouTube from "react-youtube";
import { beginnerBodyBuilding } from "../../Data/BodyBuildingData/BeginnerBodyBuildingData";
function BodyBuildingScreenProductList() {
  const [videoURl, setVideoURL] = useState("");
  const opts = {
    height: "100%",
    width: "100%",
  };
  return (
    <>
  
        {videoURl !== "" && (
          <>
            <YouTube videoId={videoURl} opts={opts} className="BG-video-player" />
            <i class="far fa-window-close" onClick={() => setVideoURL("")}></i>
          </>
        )}
    

      <div>
        <h1>Beginner Workout</h1>
        <div className="bodyBuilding-Beginner-container">
          {beginnerBodyBuilding.map((ele) => (
            <div className="bodyBuildingCard">
              <div className="bodyBuildingCard-img">
                      <img className="bodyBuildingImage" src={ele.img} alt=""
                        
                />
                <div className="bodyBuildingCard-CTA">
                  <button className="btn btn-primary btn-primary-hr-outline-out bodyBuilding-cta-btn"
                    onClick={()=>setVideoURL(ele.url)}
                          >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="bodyBuildingCard-desc">
                <a href={ele.channelLink}>
                  <img src={ele.channelIMG} alt="" />
                </a>
                <h2>{ele.title}</h2>
                <i class="fas fa-ellipsis-v"></i>
                <div className="bodyBuilding-desc-CTA-list">
                  <ul>
                    <li>
                      <i class="fab fa-google-play"></i>{" "}
                      <span>Save to watch list</span>
                    </li>
                    <li>
                      <i class="far fa-clock"></i>{" "}
                      <span>Save to watch list</span>
                    </li>
                    <li>
                      <i class="far fa-thumbs-up"></i>{" "}
                      <span>Like the video</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BodyBuildingScreenProductList;
