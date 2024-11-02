import { useMockJWT } from "hooks/useMockJWT";
import { TheButton } from "components/atoms/TheButton";

export const LoginForm: React.FC = () => {
  const { initiateLogin } = useMockJWT();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    initiateLogin();
  };

  return (
    <form aria-label="loginForm" onSubmit={handleSubmit}>
      <TheButton
        ariaLabel="login button"
        clickFunction={() => {}}
        type="submit"
      >
        Log in
      </TheButton>
    </form>
  );
};
