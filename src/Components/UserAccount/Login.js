import React from "react";
import "./App.css";
function Login() {
  return (
    <>
      <div className="bg-wallper login-bg-wallper ">
        <div className="login-card">
          <div className="login-card-left">
            <img
              src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=160"
              alt=""
            />
            <div className="login-card-left-heading">
              <h1>
                One stop destination to kickstart your <span>fitness</span>{" "}
                journey
              </h1>
            </div>
            <div className="login-card-left-desc">
              <ul>
                <li>Make your body stronger</li>
                <li>Loose yourself in Ambience</li>
                <li>Commit to be fit</li>
                <li>Train your body in fun way</li>
              </ul>
            </div>
          </div>
          <div className="login-card-right">
            <h1>Create your account</h1>
            <p>
              Alredy have an account?{" "}
              <span style={{ textDecoration: "underline",color:"black" }}>Login in here</span>{" "}
            </p>
            <span className="mini-info-login">or sign up with an email</span>
            <form>
              <div className="form-top">
                <input type="text" required placeholder="name" />
                <input type="email" required placeholder="email" />
              </div>
              <div className="form-mid">
                <input type="password" required placeholder="password" />
              </div>
              <input type="checkbox" required />
              <label htmlFor="" style={{fontFamily:"sans-serif",fontSize:"13px"}}>I agree with Terms and conditions</label>
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
