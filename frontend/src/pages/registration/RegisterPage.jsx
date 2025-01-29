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
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[25vw] p-8 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold mb-5 self-start">Register</h1>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <button
          type="submit"
          className="w-full p-2 bg-palevioletred text-white rounded-md text-lg hover:bg-palevioletredhover transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
