import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { useMediaQuery } from "@mui/material";
import theme from "../../lib/mui/theme";

export const navItems = [
  <Link className={`${styles.ctaLink}`} href="/" key={0}>
    Home
  </Link>,
  <Link
    className={`${styles.ctaLink}`}
    href="https://blog.jarrodwatts.com/"
    target="_blank"
    key={1}
  >
    Articles
  </Link>,
  <Link
    className={`${styles.ctaLink}`}
    href="https://www.youtube.com/jarrodwatts"
    target="_blank"
    key={2}
  >
    Videos
  </Link>,
  <Link
    className={`${styles.ctaLink}`}
    href="https://discord.com/invite/4eQBm7DDNS"
    target="_blank"
    key={3}
  >
    Community
  </Link>,
];

export default function Header() {
  const matches = useMediaQuery(theme.breakpoints.only("xs"));

  // Mobile view - No header
  if (matches) {
    return null;
  }

  // Desktop view
  return (
    <div className={`${styles.headerContainer} ${styles.header}`}>
      <div className={styles.left}>{navItems}</div>
    </div>
  );
}
