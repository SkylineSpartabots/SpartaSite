require("dotenv").config();
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function auth() {
    setIsLoading(true);
    setError(null);

    const ute = process.env.VAL;
    const fet = process.env.USE;

    const enc = btoa(username + ":" + password);
    console.log(enc)
    if (enc === fet) {
      localStorage.setItem("user", ute);
      setIsLoading(false);
      navigate("/");
    } else {
      setIsLoading(false);
      setError("Invalid credentials");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <form
        className="flex flex-col items-center justify-center mx-auto w-fit"
        onSubmit={handleSubmit}
      >
        <h1 className="font-scoutcond uppercase text-7xl font-black">Login</h1>
        <div className="py-4 w-full">
          <label className="text-lg font-productsans">Username</label>
          <input
            className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="py-4 w-full">
          <label className="text-lg font-productsans">Password</label>
          <input
            className="px-2 w-full bg-slate-300 rounded h-8 text-black font-productsans"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button text="Submit" color="bg-blue-400" disabled={isLoading} />
        {error && <div className="">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
