import React from "react";
import SocialRow from "./SocialRow";
import styles from "./SocialsTable.module.css";

export default function SocialsTable() {
  return (
    <div className={styles.container}>
      <SocialRow
        url="https://github.com/jarrodwatts"
        img="/socials/github.png"
        text="GitHub"
        handle="jarrodwatts"
      />
      <SocialRow
        url="https://www.youtube.com/c/jarrodwatts"
        img="/socials/youtube.png"
        text="YouTube"
        handle="jarrodwatts"
      />
      <SocialRow
        url="https://twitter.com/jarrodWattsDev"
        img="/socials/twitter.png"
        text="Twitter"
        handle="jarrodwattsdev"
      />
      <SocialRow
        url="https://www.tiktok.com/@jarrodwattsdev"
        img="/socials/tiktok.png"
        text="TikTok"
        handle="jarrodwattsdev"
      />
      <SocialRow
        url="https://lenster.xyz/u/jarrodwatts"
        img="/socials/lens.png"
        text="Lens"
        handle="jarrodwatts.lens"
      />
    </div>
  );
}
