import React from "react";
import Container from "../Container/Container";
import Task from "../Task/Task";
import styles from "./TasksList.module.scss";

const TasksList = () => {
  const tasksItems = [
    {
      category: "New",
      alt: "new",
      img: "/images/new.jpg",
      banner: "small",
      line: "New",
    },
    {
      category: "Mytasks",
      alt: "my tasks",
      img: "/images/tasks.jpg",
      banner: "small",
      line: "Mytasks",
    },
    {
      category: "Active",
      alt: "active",
      img: "/images/active.jpg",
      banner: "small",
      line: "Active",
    },
    {
      category: "Completed",
      alt: "completed",
      img: "/images/completed.jpg",
      banner: "small",
      line: "Completed",
    },
    {
      category: "Blocked",
      alt: "blocked",
      img: "/images/blocked.jpg",
      banner: "small",
      line: "Blocked",
    },
  ];

  return (
    <Container>
      <p className={styles.tasks}>All Tasks to do</p>
      <div className={styles.root}>
        {tasksItems.map((item) => (
          <Task
            key={item.img}
            category={item.category}
            alt={item.alt}
            img={item.img}
            banner={item.banner}
            line={item.line}
          />
        ))}
      </div>
    </Container>
  );
};

export default TasksList;
