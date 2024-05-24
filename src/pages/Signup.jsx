import { FaUser } from "react-icons/fa6";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const Signup = () => {
  const onSignUp = async (e) => {
    e.preventDefault();

    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post(`${baseUrl}/user/signUp`, {
        fullName: fullname,
        email,
        phoneNumber,
        password,
      });

      const loginResponse = await axios.post(`${baseUrl}/user/signIn`, {
        email,
        password,
      });
      localStorage.setItem(
        "access-token",
        `accesstoken_${loginResponse.data.data}`
      );
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      if (error?.response?.data?.message) {
        alert(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="icon-container">
        <FaUser className="icon" />
      </div>
      <div className="auth-card">
        <form action="sumbit" onSubmit={onSignUp}>
          <div className="input-container">
            <input
              type="text"
              name="fullname"
              id="fullname"
              required
              placeholder="Fullname"
            />
          </div>
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
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              required
              placeholder="Phone Number"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              id="password"
              required={true}
              minLength={8}
              placeholder="Password"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required={true}
              minLength={8}
              placeholder="Confirm Password"
            />
          </div>
          <input type="submit" value="Sign Up" className="btn" />
        </form>
        <div className="auth-footer">
          <p>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
