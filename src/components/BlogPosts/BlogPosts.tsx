import { Grid } from "@mui/material";
import React from "react";
import Blog from "../../types/Blog";
import BlogCard from "./BlogCard";
import styles from "../YoutubeVideos/Videos.module.css";

type Props = {
  blogs: Blog[];
};

export default function BlogPosts({ blogs }: Props) {
  return (
    <Grid
      container
      direction="row"
      className={styles.videosContainer}
      spacing={2}
    >
      {blogs.map((blog) => {
        return (
          <Grid item xs={12} md={4} key={blog._id}>
            <BlogCard blog={blog} />
          </Grid>
        );
      })}
    </Grid>
  );
}
