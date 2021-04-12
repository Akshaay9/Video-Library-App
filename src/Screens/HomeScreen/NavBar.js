import React from "react";
import { NavLink } from "react-router-dom";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";

function NavBar() {
  const {
    state: { likedVideo },
  } = useLikedVideoContext();
  const {
    state: { playLists },
  } = UsePlayListContext();

  const {
    state: { watchLaterVideo },
  } = useWatchLaterContext();
  return (
    <div className="nav">
      <div className="nav_left">
        <div className="nav_logo">
          <img src="" alt="" />
        </div>
        <div className="nav_name">
          <NavLink to="/">
            {" "}
            <NavLink to="/">
              {" "}
              <h2>Gym.Fit</h2>
            </NavLink>
          </NavLink>
        </div>
      </div>
      <div className="nav_center">
        <ul>
          <NavLink to="/videos/bodybuilding">
            <li className="hr-underline-middle">Body Building</li>
          </NavLink>
          <NavLink to="">
            <li className="hr-underline-middle">Calisthetic</li>
          </NavLink>

          <li className="hr-underline-middle">Yoga</li>
          <li className="hr-underline-middle">Zoomba</li>
        </ul>
      </div>
      <div className="nav_right">
        <NavLink to="/WatchLaterVideos">
          <div className="nav_login">
          
            <div className="badge badge-skyBlue">
            <i class="far fa-clock watch-later-icon"></i>
              {watchLaterVideo.length > 0 && <span>{watchLaterVideo.length}</span>}
            </div>
          </div>
        </NavLink>
        <NavLink to="/likedvideo">
          <div className="nav_cart">
            <div className="badge badge-skyBlue">
              <i class="fas fa-heart"></i>
              {likedVideo.length > 0 && <span style={{left:".9rem"}}>{likedVideo.length}</span>}
            </div>
          </div>
        </NavLink>

        <NavLink to="/playlists">
          <div className="badge badge-skyBlue">
            {playLists.length > 0 && <span style={{top:"1.1rem",left:"1.5rem"}}>{playLists.length}</span>}
            <img
              style={{ width: "52%", objectFit: "contain", height: "2rem" }}
              src="https://img.icons8.com/ios/50/000000/video-playlist.png"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
{
  /* <div className="badge badge-skyBlue"></div>
                <i class="fas fa-heart"></i>
                {wishListItems.length > 0 && (
                  <span>{wishListItems.length}</span>
                )}
              </div> */
}

export default NavBar;
