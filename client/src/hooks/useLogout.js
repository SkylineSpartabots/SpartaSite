import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  function logout() {
    dispatch({ type: "LOGOUT" });
    // remove user from storage
    localStorage.removeItem("use");
    window.location.href = "/";

  }
  return { logout };
}

export default useLogout;
