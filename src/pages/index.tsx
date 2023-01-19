import { GetStaticProps } from "next";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import ExampleWorkCard from "../components/ExampleWork/ExampleWorkCard";
import getBlogPosts from "../lib/getBlogPosts";
import getYoutubeVideos from "../lib/getYoutubeVideos";
import styles from "../styles/Home.module.css";
import Video from "../types/Video";
import Blog from "../types/Blog";
import YoutubeVideos from "../components/YoutubeVideos/YoutubeVideos";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import SocialsTable from "../components/SocialsTable/SocialsTable";
import Discord from "../components/Discord/Discord";

type Props = {
  posts: Blog[];
  videos: Video[];
};

export default function Home({ posts, videos }: Props) {
  return (
    <div className={styles.background}>
      <Container maxWidth="md" style={{ marginTop: 72 }}>
        {/* Hero  */}
        <Grid container direction="row" className={styles.hero}>
          <Grid item xs={12} sm={12} md={7} className={styles.left}>
            <div className={styles.heroTextContainer}>
              <Typography className={styles.caption} variant="body1">
                👋 Hey there, my name is
              </Typography>
              <Typography className={styles.title} variant="h1">
                Jarrod Watts
              </Typography>
              <Typography className={styles.subtitle} variant="body1">
                Developer experience engineer{" "}
                <b>
                  <Link className={styles.link} href="https://thirdweb.com/">
                    @thirdweb
                  </Link>
                </b>
                .
              </Typography>
              <Typography className={styles.summary} variant="body1">
                I help developers learn how to build in web3.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} className={styles.right}>
            <SocialsTable />
          </Grid>
        </Grid>

        {/* Recent Work */}
        <Typography variant="h2" className={styles.sectionTitle} sx={{ mt: 6 }}>
          What I do
        </Typography>

        <Typography variant="body1" className={styles.sectionDescription}>
          I educate devs at the current step on their journey.
        </Typography>

        <Typography variant="body1" className={styles.sectionDescription}>
          Below, you&rsquo;ll find some of the work I&rsquo;m most proud of.
        </Typography>

        <Grid
          container
          direction="row"
          className={styles.exampleWorkContainer}
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4} className={styles.exampleWorkCard}>
            <ExampleWorkCard
              link="https://portal.thirdweb.com/"
              title="Portal"
              image="/thirdweb-mini.png"
              description="150K+ lines of docs."
              lgDir="120deg"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={styles.exampleWorkCard}>
            <ExampleWorkCard
              link="https://portal.thirdweb.com/templates"
              title="Templates"
              image="/thirdweb-mini.png"
              description="60+ starter templates."
              lgDir="240deg"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={styles.exampleWorkCard}>
            <ExampleWorkCard
              link="https://blog.thirdweb.com/guides/"
              title="Guides"
              image="/thirdweb-mini.png"
              description="40+ developer guides."
              lgDir="360deg"
            />
          </Grid>
        </Grid>

        {/* YouTube Videos */}
        <Typography variant="h2" sx={{ mt: 7 }} className={styles.sectionTitle}>
          Videos
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 2 }}
          className={styles.sectionTitle}
        >
          Latest videos from my channel.
        </Typography>

        <YoutubeVideos videos={videos?.slice(0, 3)} />
        <Link
          href="https://www.youtube.com/jarrodwatts/videos"
          className={styles.link}
          target="_blank"
        >
          View all videos &rarr;
        </Link>

        {/* Blog Posts */}
        <Typography variant="h2" sx={{ mt: 7 }} className={styles.sectionTitle}>
          Blog Posts
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 2, mb: 2 }}
          className={styles.sectionTitle}
        >
          Latest articles on my blog.
        </Typography>

        <BlogPosts blogs={posts.slice(0, 3)} />
        <Link
          href="https://blog.jarrodwatts.com"
          className={styles.link}
          target="_blank"
        >
          View all posts &rarr;
        </Link>

        {/* Discord community */}
        <Typography variant="h2" sx={{ mt: 7 }} className={styles.sectionTitle}>
          Community
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 2, mb: 2 }}
          className={styles.sectionTitle}
        >
          Get involved in the community.
        </Typography>

        <Discord />
      </Container>
    </div>
  );
}

// SSG and ISR
export const getStaticProps: GetStaticProps<{
  posts: Blog[];
  videos: Video[];
}> = async () => {
  const blogPosts = await getBlogPosts();
  const youtubeVideos = await getYoutubeVideos();

  return {
    props: {
      posts: blogPosts,
      videos: youtubeVideos,
    },
    revalidate: 3600,
  };
};
