import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blog from "../../types/Blog";
import styles from "../YoutubeVideos/Videos.module.css";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  const { title, coverImage, slug } = blog;

  return (
    <Link
      className={styles.linkWrapper}
      href={`https://blog.jarrodwatts.com/${slug}`}
      target="_blank"
    >
      <div className={styles.card}>
        <Image
          src={coverImage || ""}
          alt={title}
          className={styles.image}
          height={140}
          width={640}
          style={{ objectFit: "cover" }}
        />
        <Typography component="p" variant="h4" className={styles.title}>
          {title}
        </Typography>
      </div>
    </Link>
  );
}
