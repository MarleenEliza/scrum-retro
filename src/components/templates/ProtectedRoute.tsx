import { useAuthContext } from "context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Wrapper that checks for valid token. Redirects to error page in case there is no valid token.
 * In a larger scale app, the error handling would be more in-depth and perhaps lead to a login page etc.
 */
export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useAuthContext();
  const navigate = useNavigate();

  /**
   * Check auth upon logging in
   */
  useEffect(() => {
    if (!token) {
      console.warn("No Token detected, rederict to login page");
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
