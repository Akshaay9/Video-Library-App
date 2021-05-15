import React, { useEffect, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { makeAnAPICall } from "../../APICalls";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";
import { useToastContext } from "../../Context/ToastContext/ToastContext";
import { useLocation, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    state: { userInfo },
    authDispatch,
  } = useLoginContext();
  const { toastDispatch } = useToastContext();

  if (userInfo.token) {
    navigate(state?.from ? state.from : "/videos/bodybuilding");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    var re = /\S+@\S+\.\S+/;
    if (email.length == 0) {
      setEmailError("This field is required");
    } else if (!re.test(email)) {
      setEmailError("Not and valid email");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    let special = /[\W]{1,}/;
    if (password.length == 0) {
      setPasswordError("this field is required");
    } else if (password.length < 5) {
      setPasswordError("passowrd should contain min 6 char");
    } else if (password.search(/[A-Z]/) < 0) {
      setPasswordError("password should contain one UpperCase");
    } else if (password.search(/[a-z]/) < 0) {
      setPasswordError("password should contain one LowerCase");
    } else if (password.search(/[0-9]/) < 0) {
      setPasswordError("password should contain one number");
    } else if (!special.test(password)) {
      setPasswordError("password should contain one special char");
    } else {
      setPasswordError("");
    }
  }, [password]);

  const formHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const dataToBeSent = {
      email: email,
      password: password,
    };
    await makeAnAPICall(
      "POST",
      "https://cryptic-hamlet-94693.herokuapp.com/api/users/login",
      authDispatch,
      "USER_LOGGED_SUCCESSFULL",
      dataToBeSent,
      null,
      toastDispatch,
      "Successfully logged in",
      setLoader
    );
  };

  return (
    <>
      <div className="bg-wallper signup-wallper">
        <div className="login-card signup-card">
          <div className="login-card-right">
            <h1>Log In to your account</h1>
            <p>
              Dont have an account?{" "}
              <span style={{ textDecoration: "underline", color: "black" }}>
                {" "}
                <NavLink to="/signup">Sign in here</NavLink>{" "}
              </span>{" "}
            </p>
            <span className="mini-info-login">or sign up with an email</span>
            <form onSubmit={(e) => formHandler(e)}>
              <div className="form-top login-form-top sign-up-form-top">
                <input
                  type="email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
              {/* {errors} */}
              <div className="error-div-input">
                {emailError !== "" ? (
                  <p className="error-handler-input error">
                    {emailError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}
              </div>
              {/* {} */}
              <div className="form-mid">
                <input
                  type="password"
                  required
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                />
              </div>
              <div className="error-div-input">
                {passwordError !== "" ? (
                  <p className="error-handler-input error">
                    {passwordError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}
              </div>
              <input type="checkbox" required />
              <label
                htmlFor=""
                style={{ fontFamily: "sans-serif", fontSize: "13px" }}
              >
                I agree with Terms and conditions
              </label>
              <button disabled={loader}>
                {loader ? <i class="fas fa-spinner fa-spin"></i> : "log In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
