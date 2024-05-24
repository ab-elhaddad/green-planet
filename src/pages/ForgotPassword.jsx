import React from "react";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const ForgotPassword = () => {
  const onResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.patch(`${baseUrl}/user/forgetPassword`, {
        email,
        newPassword: password,
      });
      alert("Password reset successful");
      window.location.href = "/signin";
    } catch (error) {
      console.error(error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred, please try again later");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="icon-container">
        <FaUser className="icon" />
      </div>
      <div className="auth-card">
        <form action="sumbit" onSubmit={onResetPassword}>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="username"
              required
              placeholder="Email Address"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              id="password"
              required
              minLength={8}
              placeholder="Password"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              minLength={8}
              placeholder="Confirm Password"
            />
          </div>
          <input type="submit" value="Reset Password" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
