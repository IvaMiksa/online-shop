import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosMotion } from "../../axios/axios";
import { loginUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [email, setEmail] = useState("i@gmail.com");
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

      const from = location.state?.from || { pathname: "/shop" };
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
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[25vw] p-8 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-5 self-start">Login</h1>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <div className="flex items-center w-full mb-3">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-pink-500 focus:ring-pink-500"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm">
            Remember me?
          </label>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-palevioletred text-white rounded-md text-lg hover:bg-palevioletredhover transition"
        >
          Login
        </button>
        <a
          href="#"
          className="mt-3 text-sm text-gray-600 self-end hover:underline"
        >
          Forgot Password?
        </a>
        <div className="relative w-full text-center my-4">
          <span className="text-gray-500 text-sm">OR</span>
          <div className="absolute inset-0 flex items-center">
            <div className="w-[40%] h-px bg-gray-300"></div>
            <div className="w-[40%] h-px bg-gray-300 ml-auto"></div>
          </div>
        </div>
        <div className="text-sm mt-3">
          Don't have an account?{" "}
          <a
            onClick={handleRegister}
            className="text-palevioletred cursor-pointer hover:underline"
          >
            SIGN UP
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
