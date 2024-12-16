import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  //Navigate to /register
  const handleRegister = () => {
    navigate("/register", {
      replace: true,
      state: { from: "/login" },
    });
  };
  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
