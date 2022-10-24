import React from "react";
import Container from "../Container/Container";
import TasksList from "../TasksList/TasksList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.root}>
      <Container>
        <TasksList />
      </Container>
    </div>
  );
};

export default Home;
