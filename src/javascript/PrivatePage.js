import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function verifyAuthentication() {
  const userLocalStorage = localStorage.getItem("auth");

  if (userLocalStorage === null) {
    return false;
  }
  return true;
}

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    verifyAuthentication()
  );

  useEffect(() => {
    if (!isAuthenticated) {
      setIsAuthenticated(false);
      console.log("Rota protegida, usuário não autorizado.");
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAuthenticated ? children : <></>;
}
