import axios from "axios";
import { FaUser } from "react-icons/fa6";
import "./Signin.css";

const baseUrl = process.env.REACT_APP_BASE_URL;
const Signin = () => {
  const onSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post(`${baseUrl}/user/signIn`, {
        email,
        password,
      });
      localStorage.setItem("access-token", `accesstoken_${response.data.data}`);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="icon-container">
        <FaUser className="icon" />
      </div>
      <div className="auth-card">
        <form action="sumbit" onSubmit={onSignIn}>
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
          <input type="submit" value="Sign In" className="btn" />
        </form>
        <div className="auth-footer">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
