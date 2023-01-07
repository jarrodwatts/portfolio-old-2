import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import ExampleWorkCard from "../components/ExampleWorkCard";
import theme from "../lib/mui/theme";
import styles from "../styles/Home.module.css";

export default function Home() {
  const matches = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <div className={styles.background}>
      <Container maxWidth="xl">
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
                Developer relations engineer{" "}
                <b>
                  <Link className={styles.link} href="https://thirdweb.com/">
                    @thirdweb
                  </Link>
                </b>
                .
              </Typography>

              <Typography className={styles.summary} variant="body1">
                I help developers learn how to build with the best tools in
                web3.
              </Typography>

              <Typography className={styles.summary} variant="body1">
                Below, you&rsquo;ll find some of the work I&rsquo;ve shipped
                this year.
              </Typography>

              {/* Show here on big screens */}
              {!matches && (
                <Grid
                  container
                  direction="row"
                  className={styles.exampleWorkContainer}
                  spacing={2}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    className={styles.exampleWorkCard}
                  >
                    <ExampleWorkCard
                      link="https://portal.thirdweb.com/"
                      title="Portal"
                      image="/thirdweb.png"
                      description="150K+ lines of docs."
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    className={styles.exampleWorkCard}
                  >
                    <ExampleWorkCard
                      link="https://portal.thirdweb.com/templates"
                      title="Templates"
                      image="/thirdweb.png"
                      description="60+ starter templates."
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    className={styles.exampleWorkCard}
                  >
                    <ExampleWorkCard
                      link="https://blog.thirdweb.com/guides/"
                      title="Guides"
                      image="/thirdweb.png"
                      description="40+ developer guides."
                    />
                  </Grid>
                </Grid>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5} className={styles.right}>
            <img
              src="/wew.png"
              alt="jarrod in the metaverse"
              className={styles.heroImageContainer}
            />
          </Grid>
        </Grid>
        {/* Show here on big screens */}
        {matches && (
          <Grid
            container
            direction="row"
            className={styles.exampleWorkContainer}
            spacing={2}
          >
            <Grid item sm={4} className={styles.exampleWorkCard}>
              <ExampleWorkCard
                link="https://portal.thirdweb.com/"
                title="Portal"
                image="/thirdweb.png"
                description="150K+ lines of docs."
              />
            </Grid>
            <Grid item sm={4} className={styles.exampleWorkCard}>
              <ExampleWorkCard
                link="https://portal.thirdweb.com/templates"
                title="Templates"
                image="/thirdweb.png"
                description="60+ starter templates."
              />
            </Grid>
            <Grid item sm={4} className={styles.exampleWorkCard}>
              <ExampleWorkCard
                link="https://blog.thirdweb.com/guides/"
                title="Guides"
                image="/thirdweb.png"
                description="40+ developer guides."
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}
