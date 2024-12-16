import { useState } from "react";
import { AxiosMotion } from "../../axios/axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosMotion.post("/auth/registration/", {
        email: email,
      });
      console.log(response);
      
      navigate("/registervalidation", {
        replace: true,
        state: { from: "/register" },
      });
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
