import React, { useEffect, useState } from "react";
import "./App.css"
import { useNavigate, NavLink } from "react-router-dom";

function LoginModal({setLoginModal }) {
  let navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    {
      timer == 0 && navigate("/login");
    }
    const id = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearTimeout(id);
  }, [timer]);

  return (
    <>
      <div className="modal-container">
        <div className="modal-cta">
          <div className="modal-heading">
            <h2>
              {" "}
              <span style={{ color: "blue" }}>Gym</span>.Fit
            </h2>
            <img
              style={{width:"10%"}}
              src="https://i.ibb.co/XJG7hZG/letter-g-logo-vector-831342-1.jpg"
              alt=""
            />
          </div>
          <div className="modal-bod">
            <p>
              {" "}
              Please{" "}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "green",
                }}
              >
                <NavLink state={{ color: "green" }} to="/login">
                  log in
                </NavLink>
              </span>{" "}
              to continue
            </p>
            <p>
              You are being redirected to login page in{" "}
              <span style={{ color: "red" }}>{timer}</span> seconds{" "}
            </p>
          </div>
          <div className="modal-cancel">
            <button onClick={() => setLoginModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
