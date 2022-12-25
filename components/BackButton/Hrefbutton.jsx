import React from "react";
import Image from "next/image";
import styles from "./Back.module.scss";
import Link from "next/link";
const Hrefbutton = ({ className, icon, url }) => {
  return (
    <Link href={url}>
      <div className={styles[className]}>
        <Image src={icon} layout="fill" />
      </div>
    </Link>
  );
};

export { Hrefbutton };
