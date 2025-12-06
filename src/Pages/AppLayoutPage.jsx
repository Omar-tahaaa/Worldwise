import styles from "./AppLayoutPage.module.css";

import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";

function AppLayoutPage() {
  return (
    <div className={styles.AppLayout}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayoutPage;
