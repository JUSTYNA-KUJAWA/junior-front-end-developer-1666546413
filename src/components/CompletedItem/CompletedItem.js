import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import clsx from "clsx";
import { getCompletedsCardsById } from "../../Redux/completedCardsRedux";
import styles from "./CompletedItem.module.scss";

const CompletedItem = () => {
  const { id } = useParams();

  const completedCard = useSelector((state) =>
    getCompletedsCardsById(state, id)
  );

  return (
    <div className={styles.root}>
      <h1>All Tasks to do</h1>
      <div className={styles.card}>
        <p>Title: {completedCard.title}</p>
        <p>Content: {completedCard.content}</p>
        <p>Author: {completedCard.author}</p>
        <p>Created: {completedCard.created_at}</p>
      </div>
      <Link to={"/Completed"}>
        <Button
          className={clsx(
            styles.button,
            completedCard.isActive && styles.isActive
          )}
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default CompletedItem;
