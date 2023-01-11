import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Discord.module.css";

export default function Discord() {
  return (
    <Link
      href="https://discord.com/invite/4eQBm7DDNS"
      target="_blank"
      className={`${styles.container} ${styles.link}`}
    >
      <Image
        src="/socials/discord.png"
        alt="Discord"
        height={48}
        width={48}
        className={styles.icon}
      />

      <div className={styles.textContainer}>
        <Typography variant="h4" className={styles.title}>
          Join the community on Discord
        </Typography>
        <Typography variant="body2" className={styles.description}>
          Chat with myself and other developers about software, dev rel, web3
          and more.
        </Typography>
      </div>
    </Link>
  );
}
