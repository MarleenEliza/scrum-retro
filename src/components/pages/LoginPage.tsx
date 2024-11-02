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
    <div className="flex items-center flex-col gap-4">
      <h1 className="font-bold text-2xl mb-4">Login Page</h1>
      <LoginForm />
    </div>
  );
};
