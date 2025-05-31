import styles from "./AppLayoutPage.module.css";

import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";
import User from "../Components/User";

function AppLayoutPage() {
  return (
    <div className={styles.AppLayout}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayoutPage;
