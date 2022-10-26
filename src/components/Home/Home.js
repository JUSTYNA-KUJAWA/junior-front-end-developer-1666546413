import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <h1>My Tasks to do</h1>
        <ul>
          <li>
            <NavLink to="/New" className={styles.listLink}>
              New
            </NavLink>
          </li>

          <li>
            <NavLink to="/Active" className={styles.listLink}>
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to="/Completed" className={styles.listLink}>
              Completed
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blocked" className={styles.listLink}>
              Blocked
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
