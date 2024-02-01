import React, { useState } from "react";
import Lock from "./assets/logo/lock.png";
import Logo from "./assets/logo/Image_Logo.png";
import Vector from "./assets/logo/Vector.png";
import { useForm } from "react-hook-form";
import "./Password.css";
import { returnErrors, returnSuccess } from "./redux/actions/alertactions";
import { useDispatch } from "react-redux";
import axiosInstance from "./axios";
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd'

import { Link, Navigate } from "react-router-dom";

function ForgetPassword() {
  const { handleSubmit, register } = useForm();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    const email = data.email;
    const body = JSON.stringify({ email });
    axiosInstance
      .post(`user/request-reset-password/`, body)
      .then((res) => {
        dispatch(returnSuccess(res.data));
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status)); 
      });
      setShow(true);
    e.target.reset();
  };
  return (
    <React.Fragment>
      <div className="row">
        <img className="fixed-image-left" src={Vector} alt="Vector" />
        <img className="fixed-image-top" src={Vector} alt="Vector" />
        <img className="fixed-image-right" src={Vector} alt="Vector" />
        <div id="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="horizontal-container">
          <div className="progress-bar-container">
            <div className="horizontal-form-box">
              <div className="horizontal-info-container">
                <img src={Lock} alt="Lock" />
                <p className="horizontal-heading">Forgot Password?</p>
                <p className="horizontal-subtitle">
                  Just provide email and we can do the rest.
                </p>
              </div>
              <form
                className="horizontal-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {show && (
                  <div className="reset-message">
                    If the email provided is correct, you will get reset
                    password link soon.
                  </div>
                )}
                <div className="o3-form-group">
                  <label htmlFor="new_password">Email</label>
                  <div className="custom_pass">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      required
                      {...register("email")}
                    />
                  </div>
                </div>

                <button className="send__btn" onClick={handleSubmit}>Send Email</button>
              <div className="back-login">
              Have an account? {" "}
                <Link to="/login" className="links">
                  Login
              </Link>
              </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
}
export default ForgetPassword;
