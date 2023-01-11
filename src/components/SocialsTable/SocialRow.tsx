import React from "react";
import styles from "./SocialsTable.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
  img: string;
  text: string;
  handle: string;
};

export default function SocialRow({ url, img, text, handle }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <Image
          src={img}
          alt={text}
          height={36}
          width={36}
          className={styles.icon}
        />
        <Typography variant="body2">{text}</Typography>
      </div>
      <Link className={styles.link} href={url} target="_blank">
        <Typography variant="body2" className={styles.link}>
          {handle}
        </Typography>
      </Link>
    </div>
  );
}
