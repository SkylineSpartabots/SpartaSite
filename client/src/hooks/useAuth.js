import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export function useAuth(type) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  async function auth(username, password) {
    console.log(dispatch);
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, type }),
    });
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    } else {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(data));

      // update auth context
      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
      navigate("/");
    }
  }
  return { auth, isLoading, error };
}

export default useAuth;
