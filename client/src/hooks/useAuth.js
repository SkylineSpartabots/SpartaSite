import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export function useAuth(type) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  async function auth(user,password) {
    setIsLoading(true);
    setError(null);

    const enc = btoa(user + ":" + password)
    if (enc == System.getenv("USE")) {
      // save the user to local storage
      localStorage.setItem("user", System.getenv("VAL"));
      setIsLoading(false);
      navigate("/");
    } else {
      setIsLoading(false);
      setError(data.error);
    }
  }
  return { auth, isLoading, error };
}

export default useAuth;
