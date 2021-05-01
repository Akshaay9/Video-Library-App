import React from "react";
import { NavLink } from "react-router-dom";
const homeScreenCards = [
  {
    id: 1,
    tag: "Resistance Training",
    name: "Build muscle, loose fat, get to below 9% Fat",
    color: "#7749ff",
    link: "bodybuilding",
    img:
      "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VpZ2h0JTIwbGlmdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    tag: "Loose Fat",
    name: "Loose Fat, get down to best shape of your life",
    color: "#ff4f58",
    link: "fatloss",
    img:
      "https://images.unsplash.com/photo-1609377375732-7abb74e435d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8d29yayUyMG91dHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    tag: "Calisthetic",
    name: "Your body weight is your ultimate weapon",
    color: "#ff5100",
    link: "calisthetic",
    img:
      "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y3Jvc3NmaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    tag: "Yoga",
    name: "Be fit, Be mindfull. Train your mind",
    color: "#476eff",
    link: "yoga",
    img:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    tag: "Zoomba",
    name: "Loose Fat, Build confidence and strength in a fun way",
    color: "#fcbf49",
    link: "zoomba",
    img:
      "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function HomeScreenCatalogue() {
  return (
    <div className="HomeScreenCatalogue-container">
      <h1>Our classes</h1>
      <div className="HomeScreenCatalogue-grid">
        {homeScreenCards.map((ele) => (
          <NavLink to={`videos/${ele.link}`}>
            <div
              style={{ backgroundColor: `${ele.color}`, color: "white" }}
              className="homeScreenCard"
            >
              <img className="bgIM" src={ele.img} alt="" />
              <div className="imgCircle-container">
                <img className="imgCircle" src={ele.img} alt="" />
              </div>

              <span>{ele.tag}</span>
              <h3>{ele.name}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default HomeScreenCatalogue;
