import React from "react";
import { NavLink } from "react-router-dom";
// import {NavLink} from "react-router-dom"
function NavBar() {
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
        <i class="far fa-clock watch-later-icon"></i>
          </div>
          </NavLink>
        <NavLink to="/likedvideo">
          <div className="nav_cart">
          <i class="fas fa-heart"></i>
          </div>
        </NavLink>

        <NavLink to="/playlists">
          <div className="nav_cart">
            <img src="https://img.icons8.com/ios/50/000000/video-playlist.png" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
