import React from 'react'

function NavBar() {
   
    return (
        <div class="nav">
        <div class="nav_left">
          <div class="nav_logo">
           <img src="" alt=""/>
          </div>
          <div class="nav_name">
            <h2>Gym.Fit</h2>
          </div>
        </div> 
        <div class="nav_center">
          <ul>
            <li className="hr-underline-middle li-hoover">Home</li>
            <li className="hr-underline-middle">Body Building</li>
            <li className="hr-underline-middle">Calisthetic</li>
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
          <div class="nav_cart">
          <img src="https://img.icons8.com/ios/50/000000/video-playlist.png"/>
          </div>
        </div>
      </div>
    )
}

export default NavBar
