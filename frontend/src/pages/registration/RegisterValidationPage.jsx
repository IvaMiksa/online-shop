import { useState } from "react";
import { AxiosMotion } from "../../axios/axios";
import { useNavigate } from "react-router-dom";

const RegisterValidationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosMotion.patch(
        "/auth/registration/validation/",
        {
          email: email,
          username: username,
          code: code,
          password: password,
          password_repeat: passwordRepeat,
          first_name: firstName,
          last_name: lastName,
        }
      );
      console.log(response);
      navigate("/login", {
        replace: true,
        state: { from: "/registervalidation" },
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
        <h1 className="text-2xl font-bold mb-5 self-start">Register Validation</h1>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="text"
          placeholder="Code"
          required
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          required
          value={passwordRepeat}
          onChange={(event) => setPasswordRepeat(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
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

export default RegisterValidationPage;