import { useMockJWT } from "hooks/useMockJWT";

export const LoginForm: React.FC = () => {
  const { initiateLogin } = useMockJWT();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    initiateLogin();
  };

  return (
    <form aria-label="loginForm" onSubmit={handleSubmit}>
      <button
        aria-label="loginButton"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Log in
      </button>
    </form>
  );
};
