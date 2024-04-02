"use client";

import styles from "./oneCard.module.scss";
import { questions } from "../../../mocks/QuestionList";
import { QuestionItem, TProps, Tquestions } from "../../../types/type";
import { useEffect, useState } from "react";

export default function OneCard({ idx, category, question }: TProps) {
  const handleShowCard = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <div key={idx} onClick={handleShowCard}>
      <div>{category}</div>
      <div>{question}</div>
    </div>
  );
}
