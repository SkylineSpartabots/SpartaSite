import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }
  return { logout };
}

export default useLogout;
