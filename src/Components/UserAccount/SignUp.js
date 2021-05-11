import React, { useState, useEffect } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { makeAnAPICall } from "../../APICalls";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";
import { useToastContext } from "../../Context/ToastContext/ToastContext";
import { useLocation, useNavigate } from "react-router-dom";
function SignUp() {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (name.length == 0) {
      setInputError("This field is required");
    } else if (name.length < 4) {
      setInputError("min 4 length is required");
    } else setInputError("");
  }, [name]);

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
    const dataToBeSent = {
      name:name,
      name:name,
      email: email,
      password: password,
    };
    await makeAnAPICall(
      "POST",
      "https://cryptic-hamlet-94693.herokuapp.com/api/users/signup",
      authDispatch,
      "USER_LOGGED_SUCCESSFULL",
      dataToBeSent,
      null,
      toastDispatch,
      "Successfully logged in",
      null
    );
  };

  return (
    <>
      <div className="bg-wallper login-bg-wallper ">
        <div className="login-card">
          <div className="login-card-left">
            <img
              src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=260"
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
              <span style={{ textDecoration: "underline", color: "black" }}>
                {" "}
                <NavLink to="/login">Login in here</NavLink>{" "}
              </span>{" "}
            </p>
            <span className="mini-info-login">or sign up with an email</span>
            <form  onSubmit={(e) => formHandler(e)}>
              <div className="form-top">
                <input
                  type="text"
                  placeholder="name"
                  required
                  minLength="4"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
              <div className="error-div-input ">
                {inputError !== "" ? (
                  <p className="error-handler-input error mobile-hide">
                    {inputError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}

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
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="error-div-input password-error">
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
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
