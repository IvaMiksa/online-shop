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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="Code"
          required
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password Repeat"
          required
          value={passwordRepeat}
          onChange={(event) => setPasswordRepeat(event.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterValidationPage;
