import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Video from "../../types/Video";
import styles from "./Videos.module.css";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  const { title, thumbnails, resourceId } = video.snippet;

  return (
    <Link
      className={styles.linkWrapper}
      href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
      target="_blank"
    >
      <div className={styles.card}>
        <Image
          src={thumbnails.standard.url || ""}
          alt={title}
          className={styles.image}
          height={140}
          width={640}
          style={{ objectFit: "cover" }}
        />
        <Typography variant="h4" className={styles.title}>
          {title}
        </Typography>
      </div>
    </Link>
  );
}
