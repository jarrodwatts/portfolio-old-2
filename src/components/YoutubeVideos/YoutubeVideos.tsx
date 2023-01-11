import { Grid } from "@mui/material";
import React from "react";
import Video from "../../types/Video";
import VideoCard from "./VideoCard";
import styles from "./Videos.module.css";

type Props = {
  videos: Video[];
};

export default function YoutubeVideos({ videos }: Props) {
  return (
    <Grid
      container
      direction="row"
      className={styles.videosContainer}
      spacing={2}
    >
      {videos.map((video) => {
        return (
          <Grid item xs={12} md={4} key={video.id}>
            <VideoCard video={video} />
          </Grid>
        );
      })}
    </Grid>
  );
}
