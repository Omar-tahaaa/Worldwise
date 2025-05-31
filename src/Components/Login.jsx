import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/FakeAuthProvider";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email address</label>
      <input
        type="text"
        placeholder="Email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Log In</button>
    </form>
  );
}

export default Login;
