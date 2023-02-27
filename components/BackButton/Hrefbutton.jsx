import React from "react";
import Image from "next/image";
import styles from "./Back.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
const Hrefbutton = ({ className, icon, url, value }) => {
  const router = useRouter();

  const handleClick = () => {
    if (url == "../index") {
      console.log(url + "2");
      router.back();
    } else {
      console.log(url + "1");
      router.push(url);
    }
  };

  return (
    <button className={styles[className]} type="button" onClick={handleClick}>
        <Image src={icon} layout="fill" />
    </button>
  );
};

export { Hrefbutton };
