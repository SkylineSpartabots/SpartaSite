import { useState } from "react";
import Button from "../components/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function auth() {
    setIsLoading(true);
    setError(null);

    const ute = process.env.REACT_APP_VAL;
    const fet = process.env.REACT_APP_USE;

    const enc = username + ":" + password;

    if ( fet === enc) {
      localStorage.setItem("use", ute);
      setIsLoading(false);
      window.location.href = "/";
    } else {
      setIsLoading(false);
      setError("Invalid Credentials");
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
