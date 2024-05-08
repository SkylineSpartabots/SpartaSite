import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth(type) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  async function auth(user, password) {
    setIsLoading(true);
    setError(null);
    const ute = process.env.VAL;
    const fet = process.env.USE;

    const enc = btoa(user + ":" + password);

    if (enc === fet) {
      localStorage.setItem("user", ute);
      setIsLoading(false);
      navigate("/");
    } else {
      setIsLoading(false);
      setError("Invalid credentials");
    }
  }

  return { auth, isLoading, error };
}

export default useAuth;
