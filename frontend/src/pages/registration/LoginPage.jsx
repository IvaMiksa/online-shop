import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosMotion } from "../../axios/axios";
import { loginUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [email, setEmail] = useState("iva.miksa+b@gmail.com");
  const [password, setPassword] = useState("Test123!");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosMotion.post("/auth/token/", {
        email: email,
        password: password,
      });
      const accessToken = response.data.access;
      //console.log(accessToken);
      dispatch(loginUser(accessToken));

      // Saving token in LS after login
      if (rememberMe) {
        localStorage.setItem("accessToken", accessToken);
      }

      const from = location.state?.from || { pathname: "/" };
      navigate(from);
    } catch (error) {
      console.log(error);
    }
  };

  //Navigate to /register
  const handleRegister = () => {
    navigate("/register", {
      replace: true,
      state: { from: "/login" },
    });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember me?</label>
        </div>
        <button type="submit" className="login-button">Login</button>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <div className="separator">OR</div>
        <div className="register-link">
          Don't have an account? <a onClick={handleRegister}>SIGN UP</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
