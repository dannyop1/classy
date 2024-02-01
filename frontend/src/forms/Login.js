import React, { useState } from "react";
import "./Login.css";
import Logo from "../assets/logo/Image_Logo.png";
import Vector from "../assets/logo/Vector.png";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authactions";
import { Link, Navigate } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import { UserOutlined } from '@ant-design/icons';
import { LockFilled } from '@ant-design/icons';
import { Input } from 'antd'

function Login() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShow] = useState(false);
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState(initialFormData);

  const handleClick = () => {
    setPasswordShow(!passwordShown);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const user = { email, password };
    dispatch(login(user));
  };
  if (auth.isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="main">
      <img className="fixed-image-left" src={Vector} alt="Vector" />
      <img className="fixed-image-top" src={Vector} alt="Vector" />
      <img className="fixed-image-right" src={Vector} alt="Vector" />
      <div id="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div id="forms">
        <div className="image-container">
          <p id="welcome-info">Welcome</p>

          <p id="login-message">We are glad to see you back</p>
        </div>
        <div className="form_input">

          <form>
            <Input size="large"
              name="email"
              id="email"
              placeholder="Email"
              prefix={<UserOutlined />}
              onChange={handleChange}
              variant="filled" />


            <div className="input-field password">
              <div className="input-icon-container">
                <Input.Password
                  name="password"
                  size="large"
                  id="password"
                  placeholder="Password"
                  prefix={<LockFilled />}
                  onChange={handleChange}
                  variant="filled" />
              </div>
            </div>
            <div className="sections">
              <Link to="/forgetpassword" className="links">
                Forget Password?
              </Link>
            </div>
            <button className="login__btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="account">
              <span>
                Don't have an account?{" "}
                <a href="mailto:claasyhethongquanlylophoc@gmail.com" className="links">
                  Contact Us
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Login;
