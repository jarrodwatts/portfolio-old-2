import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./ExampleWorkCard.module.css";

type Props = {
  link: string;
  title: string;
  description: string;
  image: string;
};

export default function ExampleWorkCard({
  link,
  title,
  description,
  image,
}: Props) {
  return (
    <Link className={styles.linkWrapper} href={link}>
      <div className={styles.card}>
        <div className={styles.innerCard}>
          <div className={styles.cardHeader}>
            <img src={image} alt={title} className={styles.image} />
            <Typography variant="h4" className={styles.title}>
              {title}
            </Typography>
          </div>
          <Typography variant="body2" className={styles.description}>
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
