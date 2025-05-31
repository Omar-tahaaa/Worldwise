import PageNav from "../Components/PageNav";
import styles from "./LoginPage.module.css";
import Login from "../Components/Login";

function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <PageNav />
      <Login />
    </main>
  );
}

export default LoginPage;
