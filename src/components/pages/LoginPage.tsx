import { useMockJWT } from "hooks/useMockJWT";
import { useEffect } from "react";
import { LoginForm } from "components/molecules/LoginForm";

export const LoginPage: React.FC = () => {
  const { validateLogin, error } = useMockJWT();

  /**
   * Validate token upon opening of Login page
   */
  useEffect(() => {
    validateLogin();
    if (error) console.error("Error occured while validating login auth");
  }, [validateLogin, error]);

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
};
