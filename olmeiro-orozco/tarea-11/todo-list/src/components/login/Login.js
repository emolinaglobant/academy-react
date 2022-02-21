import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="login">
      <h1>Login ToDos Application</h1>
      <hr />

      <button className="btnLogin" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;