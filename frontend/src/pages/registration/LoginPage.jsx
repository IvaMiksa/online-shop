import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosMotion } from "../../axios/axios";
import {loginUser} from "../../store/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
   const [email, setEmail] = useState("iva.miksa+b@gmail.com"); 
   const [password, setPassword] = useState("Test123!");
 

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
       localStorage.setItem("accessToken", accessToken);
 
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
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
