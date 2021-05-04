import React from "react";
import { NavLink } from "react-router-dom";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";

function NavBar({ navModal, setNavModal }) {
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
    <>
      <div className="nav">
        <div className="nav_left">
          <div className="nav_logo mobile-hide">
            <img src="https://i.ibb.co/XJG7hZG/letter-g-logo-vector-831342-1.jpg" alt="" />
          </div>
          

          <div className="nav_name ">
            <NavLink to="/">
              <h2>Gym.Fit</h2>
            </NavLink>
          </div>
          <div className="badge badge-skyBlue desktop-hide ">
            {playLists.length > 0 && (
              <span style={{ top: "1.1rem", left: "1.5rem" }}>
                {playLists.length}
              </span>
            )}
            <img
              style={{ width: "52%", objectFit: "contain", height: "2rem" }}
              src="https://img.icons8.com/ios/50/000000/video-playlist.png"
            />
          </div>
          <div
            className={`hamberger desktop-hide ${navModal ? "rotateHam" : ""}`}
            onClick={() => setNavModal(!navModal)}
          >
            <div className="ham1"></div>
            <div className="ham2"></div>
            <div className="ham3"></div>
          </div>
        </div>
        <div className="nav_center">
          <ul>
            <NavLink to="/videos/bodybuilding">
              <li className="hr-underline-middle">Body Building</li>
            </NavLink>
            <NavLink to="/videos/fatloss">
              <li className="hr-underline-middle">Fat Loss</li>
            </NavLink>
            <NavLink to="/videos/calisthetic">
              <li className="hr-underline-middle">Calisthenics</li>
            </NavLink>
            <NavLink to="/videos/yoga">
              <li className="hr-underline-middle">Yoga</li>
            </NavLink>
            <NavLink to="/videos/zoomba">
              <li className="hr-underline-middle">Zumba</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav_right">
          <NavLink to="/WatchLaterVideos">
            <div className="nav_login">
              <div className="badge badge-skyBlue ">
                <i class="far fa-clock watch-later-icon"></i>
                {watchLaterVideo.length > 0 && (
                  <span>{watchLaterVideo.length}</span>
                )}
              </div>
            </div>
          </NavLink>
          <NavLink to="/likedvideo">
            <div className="nav_cart">
              <div className="badge badge-skyBlue">
                <i class="fas fa-heart"></i>
                {likedVideo.length > 0 && (
                  <span style={{ left: ".9rem" }}>{likedVideo.length}</span>
                )}
              </div>
            </div>
          </NavLink>

          <div className="badge badge-skyBlue mobile-hide">
            <NavLink to="/playlists">
              {playLists.length > 0 && (
                <span style={{ top: "1.1rem", left: "1.5rem" }}>
                  {playLists.length}
                </span>
              )}
              <img
                style={{ width: "52%", objectFit: "contain", height: "2rem" }}
                src="https://img.icons8.com/ios/50/000000/video-playlist.png"
              />
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className={`mobile_nav_bar ${navModal ? "show_nav" : ""} desktop-hide`}
      >
        <ul>
          <NavLink to="/videos/bodybuilding">
            <li
              className="hr-underline-middle"
              onClick={() => setNavModal(false)}
            >
              Body Building
            </li>
          </NavLink>
          <NavLink to="/videos/fatloss">
            <li
              className="hr-underline-middle"
              onClick={() => setNavModal(false)}
            >
              Fat Loss
            </li>
          </NavLink>
          <NavLink to="/videos/calisthetic">
            <li
              className="hr-underline-middle"
              onClick={() => setNavModal(false)}
            >
              Calisthenics
            </li>
          </NavLink>
          <NavLink to="/videos/yoga">
            <li
              className="hr-underline-middle"
              onClick={() => setNavModal(false)}
            >
              Yoga
            </li>
          </NavLink>
          <NavLink to="/videos/zoomba">
            <li
              className="hr-underline-middle"
              onClick={() => setNavModal(false)}
            >
              Zumba
            </li>
          </NavLink>
        </ul>
      </div>
    </>
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
