import React from "react";
import { NavLink } from "react-router-dom";
// import {NavLink} from "react-router-dom"
function NavBar() {
  return (
    <div class="nav">
      <div class="nav_left">
        <div class="nav_logo">
          <img src="" alt="" />
        </div>
        <div class="nav_name">
          <NavLink to="/">
            {" "}
            <NavLink to="/">
              {" "}
              <h2>Gym.Fit</h2>
            </NavLink>
          </NavLink>
        </div>
      </div>
      <div class="nav_center">
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
      <div class="nav_right">
        <div class="nav_login">
          <i class="fas fa-user"></i>
        </div>

        <div class="nav_cart">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <NavLink to="/playlists">
          <div class="nav_cart">
            <img src="https://img.icons8.com/ios/50/000000/video-playlist.png" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
